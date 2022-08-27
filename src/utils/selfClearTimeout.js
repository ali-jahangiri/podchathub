function selfClearTimeout(cb, timeout = 0) {
	let timer = setTimeout(() => {
		cb();
		clearTimeout(timer);
	}, timeout);
}

export default selfClearTimeout;
