var lastScrollTop = 0;

document.addEventListener('scroll', function (event) {
	document.querySelectorAll('.tasrcontent').forEach((element) => {
		debugger;
		const st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop) {
			element.scrollTop += 3;
		} else {
			element.scrollTop -= 3;
		}
		lastScrollTop = st <= 0 ? 0 : st;
	});
});
