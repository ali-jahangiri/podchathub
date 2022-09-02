function promisify(cb) {
	return new Promise((res, rej) => {
		return cb(res, rej);
	});
}

export default promisify;
