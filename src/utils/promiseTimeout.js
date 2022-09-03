import selfClearTimeout from "./selfClearTimeout";

function promiseTimeout(promise, timeout) {
	return Promise.race([promise, new Promise((_, rej) => selfClearTimeout(rej, timeout))]);
}

export default promiseTimeout;
