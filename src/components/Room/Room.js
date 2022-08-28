import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "components/Container";
import Header from "components/Header";
import MessageList from "components/Message/List/MessageList";
import MessageInput from "components/MessageInput";
import selfClearTimeout from "utils/selfClearTimeout";
import StyledRoom from "./room.style";
import InitialIntro from "components/InitialIntro/InitialIntro";
import usePodSdk from "hooks/usePodSdk/usePodSdk";

const staticItems = [
	{
		time: "08:32",
		source: "owner",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "owner",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "owner",
		content: "سلام",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "owner",
		author: "شما",
		content:
			"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
	},
	{
		time: "08:32",
		source: "owner",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "owner",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "owner",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "owner",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content:
			"لورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگی  لورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
	{
		time: "08:32",
		source: "clinic",
		content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		author: "شما",
	},
];

const Room = () => {
	const [currentStatic, setCurrentStatic] = useState(staticItems);
	const [showIntro, setShowIntro] = useState(true);
	const messageListContainerRef = useRef();

	const chat = usePodSdk();
	console.log(chat);

	function addStaticItem(content) {
		setCurrentStatic(prev => [
			...prev,
			{
				time: "08:32",
				source: "owner",
				content,
				author: "شما",
				asNew: true,
			},
		]);
		selfClearTimeout(() => scrollToBottomHandler("smooth"), 10);
	}

	useLayoutEffect(
		function initialScrollToEndOfMessageContainer() {
			if (messageListContainerRef.current && !showIntro) {
				scrollToBottomHandler();
			}
		},
		[messageListContainerRef, showIntro]
	);

	const scrollToBottomHandler = (behavior = "default") => {
		if (behavior === "smooth") {
			messageListContainerRef.current.scrollTo({ left: 0, top: messageListContainerRef.current.scrollHeight, behavior });
		} else {
			messageListContainerRef.current.scrollTop = messageListContainerRef.current.scrollHeight;
		}
	};

	// test DELETE THIS
	useEffect(() => {
		selfClearTimeout(() => {
			setShowIntro(false);
		}, 3500);
	}, []);

	return (
		<StyledRoom>
			<Container>
				<InitialIntro showIntro={showIntro}>
					<Header />
					<MessageList containerRef={messageListContainerRef} items={currentStatic} />
					<MessageInput onSendMessage={addStaticItem} />
				</InitialIntro>
			</Container>
		</StyledRoom>
	);
};

export default Room;
