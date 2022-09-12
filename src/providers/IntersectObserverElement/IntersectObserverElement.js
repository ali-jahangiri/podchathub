import { useEffect, useRef } from "react";

const IntersectObserverElement = ({ onIntersecting, threshold }) => {
	const observerElementRef = useRef();

	useEffect(function () {
		if (observerElementRef.current) {
			const options = {
				rootMargin: "1000px 0px",
				threshold,
			};

			const observer = new IntersectionObserver(entire => {
				onIntersecting(entire[0].isIntersecting);
			}, options);

			observer.observe(observerElementRef.current);
		}
	}, []);

	return (
		<div
			style={{
				width: "100%",
				flex: "0 0 10px",
				background: "red",
				height: 20,
				visibility: "hidden",
			}}
			ref={observerElementRef}
		>
			{"intersect row"}
		</div>
	);
};

export default IntersectObserverElement;
