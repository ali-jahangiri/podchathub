import { useRef, useState } from "react";
import StyledEmoji from "./emoji.style";
import emojiList from "../../../static/emojiList";
import selfClearTimeout from "utils/selfClearTimeout";
import { useOutsideClick } from "hooks/useOutsideClick";

const EmojiIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm5.666,13.746a1,1,0,0,0-1.33-1.494A7.508,7.508,0,0,1,12,16a7.509,7.509,0,0,1-4.334-1.746,1,1,0,0,0-1.332,1.492A9.454,9.454,0,0,0,12,18,9.454,9.454,0,0,0,17.666,15.746ZM6,10c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Zm8,0c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Z" />
	</svg>
);

const Emoji = ({ onSelect }) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const [haveToRenderPopover, setHaveToRenderPopover] = useState(false);
	const emojiContainerRef = useRef();

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

	useOutsideClick(emojiContainerRef, closePopoverHandler);

	return (
		<StyledEmoji ref={emojiContainerRef}>
			<button
				onClick={togglePopoverStatusHandler}
				className={`emoji__trigger ${isPopoverOpen ? "emoji__trigger--active" : ""}`}
			>
				<EmojiIcon />
			</button>
			{haveToRenderPopover && (
				<div className={`emoji__popover ${isPopoverOpen ? "emoji__popover--show" : ""}`}>
					<div className="emoji__itemContainer">
						{emojiList.map((emoji, i) => (
							<button onClick={() => onSelect(emoji.code)} className="emoji__item" key={i}>
								<img src={emoji.src} alt="emoji" />
							</button>
						))}
					</div>
				</div>
			)}
		</StyledEmoji>
	);
};

export default Emoji;
