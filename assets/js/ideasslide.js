activeslide = document.getElementsByClassName('ideasslide')[0];

activeindex = document.getElementsByClassName('slideindex')[0];

slideindex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName('ideasslide');
	var indexballs = document.getElementsByClassName('slideindex');
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove('iactive');
		indexballs[i].classList.remove('itactive');
	}
	slideindex++;
	if (slideindex > x.length) {
		slideindex = 1;
	}
	x[slideindex - 1].classList.add('iactive');
	indexballs[slideindex - 1].classList.add('itactive');
	setTimeout(carousel, 5000);
}

document.getElementsByClassName('slideindex')[0].addEventListener('click', function () {
	if (this != activeindex) {
		activeindex.classList.remove('itactive');

		activeindex = this;

		activeindex.classList.add('itactive');

		activeslide.classList.remove('iactive');

		activeslide = document.getElementsByClassName('ideasslide')[0];

		slideindex = 0;

		activeslide.classList.add('iactive');
	}
});

document.getElementsByClassName('slideindex')[1].addEventListener('click', function () {
	if (this != activeindex) {
		activeindex.classList.remove('itactive');

		activeindex = this;

		activeindex.classList.add('itactive');

		activeslide.classList.remove('iactive');

		activeslide = document.getElementsByClassName('ideasslide')[1];

		slideindex = 1;

		activeslide.classList.add('iactive');
	}
});

document.getElementsByClassName('slideindex')[2].addEventListener('click', function () {
	if (this != activeindex) {
		activeindex.classList.remove('itactive');

		activeindex = this;

		activeindex.classList.add('itactive');

		activeslide.classList.remove('iactive');

		activeslide = document.getElementsByClassName('ideasslide')[2];

		slideindex = 2;
		activeslide.classList.add('iactive');
	}
});
