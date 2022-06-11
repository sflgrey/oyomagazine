function webShare({ title, text, url }) {
	if (navigator.share) {
		document
			.getElementsByClassName('background-container')
			.classList.add('background-container-native');
		navigator
			.share({
				title: title,
				text: text,
				url: url,
			})
			.then(() => console.log('Successful share'))
			.catch((error) => console.log('Error sharing', error));
	} else {
		console.log("Your browser doesn't support Navigator.share()");
		$('.bd-example-modal-sm').modal();
	}
}

for (const element of document.getElementsByClassName('share-btn')) {
	element.addEventListener('click', function () {
		webShare({ title: 'test' });
	});
}
