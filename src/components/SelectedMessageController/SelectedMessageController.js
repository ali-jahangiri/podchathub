import Container from "../Container/Container";
import StyledSelectedMessageController from "./selectedMessageController.style";

const CloseIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
		<path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
	</svg>
);

const TrashIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
		<path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
		<path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
		<path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
	</svg>
);

const SelectedMessageController = ({ selectedMessagesList = [], show, onCloseHandler }) => {
	function deleteMessagesHandler() {
		console.log("delete");
	}

	return (
		<StyledSelectedMessageController
			className={`messageController ${show ? "messageController--show" : ""}`}
		>
			<Container className="messageController__container">
				<div onClick={onCloseHandler} className="messageController__closeTrigger">
					<CloseIcon />
				</div>
				<div className="messageController__title">
					{selectedMessagesList.length} پیام انتخاب شده
				</div>
				<div onClick={deleteMessagesHandler} className="messageController__deleteTrigger">
					<TrashIcon />
				</div>
			</Container>
		</StyledSelectedMessageController>
	);
};

export default SelectedMessageController;
