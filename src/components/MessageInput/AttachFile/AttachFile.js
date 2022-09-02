import { useOutsideClick } from "hooks/useOutsideClick";
import usePodSdk from "hooks/usePodSdk/usePodSdk";
import { useEffect, useRef, useState } from "react";
import selfClearTimeout from "utils/selfClearTimeout";
import StyledAttachFile from "./attachFile.style";

const ClipIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M22.95,9.6a1,1,0,0,0-1.414,0L10.644,20.539a5,5,0,1,1-7.072-7.071L14.121,2.876a3,3,0,0,1,4.243,4.242L7.815,17.71a1.022,1.022,0,0,1-1.414,0,1,1,0,0,1,0-1.414l9.392-9.435a1,1,0,0,0-1.414-1.414L4.987,14.882a3,3,0,0,0,0,4.243,3.073,3.073,0,0,0,4.243,0L19.778,8.532a5,5,0,0,0-7.071-7.07L2.158,12.054a7,7,0,0,0,9.9,9.9L22.95,11.018A1,1,0,0,0,22.95,9.6Z" />
	</svg>
);

const DocIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z" />
	</svg>
);

const ImgIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
		<path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z" />
		<path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z" />
	</svg>
);

const AttachFile = () => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const [haveToRenderPopover, setHaveToRenderPopover] = useState(false);

	const [uploadedFile, setUploadedFile] = useState(null);

	const attachFileContainerRef = useRef();
	const mediaInputRef = useRef();
	const docInputRef = useRef();

	const openPopoverHandler = () => {
		setHaveToRenderPopover(true);

		selfClearTimeout(() => setIsPopoverOpen(true));
	};

	const closePopoverHandler = () => {
		setIsPopoverOpen(false);

		selfClearTimeout(() => {
			setHaveToRenderPopover(false);
		}, 190);
	};

	const togglePopoverStatusHandler = () => {
		if (isPopoverOpen) closePopoverHandler();
		else openPopoverHandler();
	};

	useOutsideClick(attachFileContainerRef, closePopoverHandler);

	const mediaInputChangeHandler = ({ target }) => {};

	const docInputChangeHandler = ({ target }) => {
		if (target.files) {
			readFileHandler(target.files[0], docFile => {
				console.log(docFile);
			});
			// reset input value imperatively!
			target.value = "";
		}
	};

	const readFileHandler = (fileField, onFileRead) => {
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			const uploadedFile = reader.result;
			onFileRead(uploadedFile);
		});

		reader.readAsDataURL(fileField);
	};

	const inputChangeHandler = ({ target }) => {};

	const triggerFileInputHandler = target => target.click();

	const chatInstance = usePodSdk();

	function get() {
		const result = chatInstance.getAllThreads({}, result => {
			console.log(result);
		});
	}

	function getContacts() {
		chatInstance.getContacts({}, result => {
			console.log(result);
		});
	}

	function add() {
		chatInstance.addContacts(
			{
				firstName: "علی قدوسی",
				lastName: "جان",
				cellphoneNumber: "09917240664",
				typeCode: "default",
				// username: "ali.jon",
			},
			result => {
				console.log("added", result);
			}
		);
	}

	const ROOM_ID = "THIS_IS_ROOM_ID_1";
	function create() {}

	function search() {
		chatInstance.getThreads({ title: ROOM_ID, threadName: ROOM_ID }, res => {
			console.log(res);
		});
	}

	return (
		<StyledAttachFile ref={attachFileContainerRef}>
			{/* 
			
**

			*/}

			<button onClick={get}>get</button>
			<button onClick={create}>create</button>

			<button onClick={getContacts}>contaxt</button>
			<button onClick={add}>add</button>
			<button onClick={search}>search</button>

			<input
				accept="image/jpeg, image/png, image/jpg"
				onChange={mediaInputChangeHandler}
				ref={mediaInputRef}
				hidden
				type="file"
			/>
			<input accept=".pdf,.doc" onChange={docInputChangeHandler} ref={docInputRef} hidden type="file" />
			<button
				className={`attacheFile__trigger ${isPopoverOpen ? "attacheFile__trigger--active" : ""}`}
				onClick={togglePopoverStatusHandler}
			>
				<ClipIcon />
			</button>
			{haveToRenderPopover && (
				<div className={`attacheFile__popover ${isPopoverOpen ? "attacheFile__popover--show" : ""}`}>
					<div className="attacheFile__itemContainer">
						<button onClick={() => triggerFileInputHandler(docInputRef.current)} className="attacheFile__item">
							اسناد
							<DocIcon />
						</button>
						<button onClick={() => triggerFileInputHandler(mediaInputRef.current)} className="attacheFile__item">
							مدیا
							<ImgIcon />
						</button>
					</div>
				</div>
			)}
		</StyledAttachFile>
	);
};

export default AttachFile;
