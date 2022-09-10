import { useEffect, useState, useLayoutEffect, Fragment } from "react";
import usePodSdk from "hooks/usePodSdk";
import useStore from "hooks/useStore";
import ProgressBar from "components/ProgressBar";
import Button from "components/Button";
import Alert from "components/Alert";

import promiseTimeout from "utils/promiseTimeout";
import promisify from "utils/promisify";
import selfClearTimeout from "utils/selfClearTimeout";
import StyledSetup from "./setup.style";
import { FLOW_BLOCK_TIMEOUT, TIMEOUT_ERROR_MESSAGE } from "../../static/setupKeys";

const Setup = ({ children }) => {
	const [showSetupScreen, setShowSetupScreen] = useState(true);
	const [progressBarDetails, setProgressBarDetails] = useState({
		totalStep: 3,
		currentStep: 0,
		render: false,
	});
	const [flowError, setFlowError] = useState(null);
	const chatInstance = usePodSdk();
	const [store, setStore] = useStore();

	const [animateScreenFadeIn, setAnimateScreenFadeIn] = useState(false);
	const [animateScreenFadeOut, setAnimateScreenFadeOut] = useState(false);

	const {
		ownerProps: { threadId, doctorPhoneNumbers, threadDescription },
	} = store;

	function onChatReadyHandler() {
		return promisify((res, rej) => {
			console.log("LIFECYCLE", "chat ready");
			chatInstance.on("chatReady", onReadyError => {
				if (!onReadyError) res();
				rej();
			});
		});
	}

	function getTargetThread() {
		return promisify((res, rej) => {
			console.log("LIFECYCLE", "get target thread");
			chatInstance.getThreads({ threadName: threadId }, response => {
				if (response.hasError) rej(response.errorMessage);
				else {
					res(response.result.threads[0]);
					setProgressBarDetails({ currentStep: 1, totalStep: 3 });
				}
			});
		});
	}

	function threadExistingCheckDistributer(foundedTargetThread) {
		if (!foundedTargetThread) return initializeThread();
		else return foundedTargetThread;
	}

	async function addProvidersAsContact() {
		// provider essentials mean doctors and nurses
		setProgressBarDetails({ currentStep: 2, totalStep: 3 });

		console.log("LIFECYCLE", "add contact");

		const contactDetailsList = doctorPhoneNumbers.map((cellphoneNumber, i) => ({
			firstName: "دکتر",
			lastName: `${i + 1}`,
			cellphoneNumber,
			typeCode: "default",
		}));

		return await promisify(resolve => {
			(function rec(index, addedDoctorContactList) {
				if (index < contactDetailsList.length) {
					chatInstance.addContacts(contactDetailsList[index], result => {
						addedDoctorContactList.push(result);
						rec(index + 1, addedDoctorContactList);
					});
				} else resolve(addedDoctorContactList);
			})(0, []);
		});
	}

	function createThread(contacts) {
		console.log("LIFECYCLE", "create thread with", contacts);

		const threadParams = {
			title: threadId,
			description: threadDescription,
			type: "NORMAL",
			invitees: contacts.map(contact => ({
				id: contact.id,
				idType: "TO_BE_USER_CONTACT_ID",
			})),
		};

		return promisify(res => {
			chatInstance.createThread(threadParams, ({ result }) => {
				res(result.thread);
				setProgressBarDetails({ currentStep: 3, totalStep: 5 });
			});
		});
	}

	async function initializeThread() {
		return await addProvidersAsContact()
			.then(function combineUserToList(allContact) {
				return allContact.map(contactResponsePack => contactResponsePack.result.contacts[0]);
			})
			.then(createThread);
	}

	function getThreadMessageHistory(targetThread) {
		// get some amount of prevues user messages history to have better ux and continue where left with no additional loading state in room screen
		console.log("LIFECYCLE", "get initial message thread history");
		return promisify(res => {
			chatInstance.getHistory({ threadId: targetThread.id }, response => {
				res({ thread: targetThread, initialHistory: response.result });
			});
		});
	}

	function getCurrentPatientUserDetails(passedDetails) {
		// get full details of owner of TOKEN and who was enter inside the app as "patient"
		return promisify(res => {
			chatInstance.getUserInfo(({ result }) => {
				res({ ...passedDetails, user: result.user });
			});
		});
	}

	function finalSetThreadToStore({ thread, initialHistory, user }) {
		console.log("LIFECYCLE", "FINAL");
		setStore(prev => ({
			...prev,
			thread,
			user,
			initialMessageHistory: initialHistory,
		}));
		setProgressBarDetails({ totalStep: 1, currentStep: 1 });

		setAnimateScreenFadeOut(true);
		selfClearTimeout(() => setShowSetupScreen(false), 200); // 200ms come from token.animateDuration.fast
	}

	function threadSetupFlowHandler() {
		promiseTimeout(
			onChatReadyHandler()
				.then(getTargetThread)
				.then(threadExistingCheckDistributer)
				.then(getThreadMessageHistory)
				.then(getCurrentPatientUserDetails)
				.then(finalSetThreadToStore)
				.catch(function generalEntireFlowChainError(err) {
					setFlowError(err);
					setProgressBarDetails({ render: false });
				}),
			FLOW_BLOCK_TIMEOUT
		).catch(function onChatFailHandler() {
			setFlowError(TIMEOUT_ERROR_MESSAGE);
			setProgressBarDetails({ render: false });
		});
	}

	function retryThreadSetupHandler() {
		setFlowError(null);
		setProgressBarDetails({ currentStep: 1, totalStep: 3, render: true });
		threadSetupFlowHandler();
	}

	useEffect(threadSetupFlowHandler, []);

	useLayoutEffect(function initialScreenElementAnimateHelper() {
		selfClearTimeout(() => {
			setAnimateScreenFadeIn(true);
		}, 10);

		selfClearTimeout(function initialProgressBarShowHandler() {
			setProgressBarDetails(prev => ({
				...prev,
				render: true,
			}));
		}, 3000);
	}, []);

	return (
		<Fragment>
			{showSetupScreen ? (
				<StyledSetup
					className={`setup ${animateScreenFadeOut ? "setup--fadeOut" : ""} ${
						animateScreenFadeIn ? "setup--fadeIn" : ""
					}`}
				>
					<div className="setup__container">
						<div className="setup__iconBox">
							<p>پاد</p>
						</div>
						<div className="setup__desc">
							<p>پاد چت</p>
							<span>ارتباطی آسان </span>
							<span>در سایه سلامتی</span>
							{flowError && (
								<div
									className={`setup__alertContainer ${
										flowError ? "setup__alertContainer--show" : ""
									}`}
								>
									<Alert>{flowError}</Alert>
									<Button onClick={retryThreadSetupHandler}>تلاش مجدد</Button>
								</div>
							)}
						</div>

						<ProgressBar {...progressBarDetails} />
					</div>
				</StyledSetup>
			) : (
				children
			)}
		</Fragment>
	);
};

export default Setup;
