for (const element of document.querySelectorAll('.btn-open-article')) {
	element.addEventListener('click', function (e) {
		e.preventDefault();
		const src = $(this).data('iframelink');
		const isIframeAllowed = $(this).data('iframeok');
		debugger;
		if (isIframeAllowed) {
			$('.bd-example-modal-lg').modal();
			document.getElementById('oyoIframe').src = src;
		} else {
			window.open(src, '_blank');
		}
	});
}
