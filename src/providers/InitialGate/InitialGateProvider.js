import { useEffect, useState } from "react";
import InitialIntro from "components/InitialIntro/InitialIntro";
import usePodSdk from "hooks/usePodSdk/usePodSdk";
import useStore from "hooks/useStore/useStore";
import promisify from "utils/promisify";

const InitialGate = ({ children }) => {
	const [showIntro, setShowIntro] = useState(true);
	const chatInstance = usePodSdk();
	const [store] = useStore();

	const {
		ownerProps: { threadId, doctorPhoneNumbers, threadDescription },
	} = store;

	function checkClientAuthentication() {}

	function onChatReadyHandler() {
		console.log("LIFECYCLE", "chat ready");
		return promisify((res, rej) => {
			chatInstance.on("chatReady", onReadyError => {
				if (!onReadyError) res();
				rej();
			});
		});
	}

	function getAllAvaiavbleThreads() {
		console.log("LIFECYCLE", "get all available thread");
		return promisify((res, rej) => {});
	}

	function getPrevuesDoctorsAsContact() {
		return promisify((res, rej) => {});
	}

	function combineUserToList(allContact) {
		console.log(allContact, "test");
		return allContact.map(contactResponsePack => contactResponsePack.result.contacts[0]);
	}

	async function addDoctorsAsContact() {
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

	function getTargetThread() {
		console.log("LIFECYCLE", "get target thread");
		return promisify((res, rej) => {
			chatInstance.getThreads({ threadName: threadId }, ({ result }) => {
				res(result.threads[0]);
			});
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

		return promisify((res, rej) => {
			chatInstance.createThread(threadParams, ({ result }) => {
				res(result.thread);
			});
		});
	}

	async function initializeThread() {
		return await addDoctorsAsContact().then(combineUserToList).then(createThread);
	}

	function threadExistingCheckDistributer(foundedTargetThread) {
		if (!foundedTargetThread) return initializeThread();
		else return foundedTargetThread;
	}

	function finalSetThreadToStore(targetThread) {
		console.log("FINAL", targetThread);
	}

	useEffect(function threadSetupHandler() {
		// onChatReadyHandler()
		// 	.then(getTargetThread)
		// 	.then(threadExistingCheckDistributer)
		// 	.then(finalSetThreadToStore)
		// 	.catch(function generalEntireChainError(err) {});
	}, []);

	if (showIntro)
		return (
			<>
				<InitialIntro showIntro={showIntro}></InitialIntro>
			</>
		);
	else return children;
};

export default InitialGate;
