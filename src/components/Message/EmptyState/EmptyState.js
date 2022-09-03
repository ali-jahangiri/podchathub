import StyledEmptyState from "./empty.style";

const EmptyState = () => {
	return (
		<StyledEmptyState>
			<div>
				<div style={{ animationDelay: "100ms" }} />
				<div style={{ animationDelay: "200ms" }} />
				<div style={{ animationDelay: "300ms" }} />
			</div>
			<p>پیامی یافت نشد!</p>
			<span>تاریخچه پیام شما خالی میباشد. هم اکنون شروع به صحبت کنید.</span>
		</StyledEmptyState>
	);
};

export default EmptyState;
