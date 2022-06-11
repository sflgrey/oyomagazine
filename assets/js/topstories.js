var highlighted = document.getElementById('high1');
var activeright = document.getElementsByClassName('panelnews')[0];
var panelNewsItems = document.getElementsByClassName('panelnews');
slideindex = 0;
var indexInterval = 0;

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
	x[slideindex - 1]?.classList.add('iactive');
	indexballs[slideindex - 1]?.classList.add('itactive');
	// setTimeout(carousel, 3000);
}

carousel();

var newsSlideShow = setInterval(() => {
	activeright.classList.remove('tactive');
	activeright = panelNewsItems[indexInterval];
	activeright.classList.add('tactive');
	highlighted.classList.remove('active');
	highlighted = document.getElementById('high' + (indexInterval + 1));
	highlighted.classList.add('active');
	indexInterval++;
	if (indexInterval >= 5) {
		indexInterval = 0;
	}
}, 5000);

panelNewsItems[0].addEventListener('click', function () {
	clearInterval(newsSlideShow);
	if (this != activeright) {
		activeright.classList.remove('tactive');
		activeright = this;
		activeright.classList.add('tactive');

		highlighted.classList.remove('active');

		highlighted = document.getElementById('high1');

		highlighted.classList.add('active');
	}
});

panelNewsItems[1].addEventListener('click', function () {
	clearInterval(newsSlideShow);
	if (this != activeright) {
		activeright.classList.remove('tactive');
		activeright = this;
		activeright.classList.add('tactive');

		highlighted.classList.remove('active');

		highlighted = document.getElementById('high2');

		highlighted.classList.add('active');
	}
});

panelNewsItems[2].addEventListener('click', function () {
	clearInterval(newsSlideShow);
	if (this != activeright) {
		activeright.classList.remove('tactive');
		activeright = this;
		activeright.classList.add('tactive');

		highlighted.classList.remove('active');

		highlighted = document.getElementById('high3');

		highlighted.classList.add('active');
	}
});

panelNewsItems[3].addEventListener('click', function () {
	clearInterval(newsSlideShow);
	if (this != activeright) {
		activeright.classList.remove('tactive');
		activeright = this;
		activeright.classList.add('tactive');

		highlighted.classList.remove('active');

		highlighted = document.getElementById('high4');

		highlighted.classList.add('active');
	}
});

panelNewsItems[4].addEventListener('click', function () {
	clearInterval(newsSlideShow);
	if (this != activeright) {
		activeright.classList.remove('tactive');
		activeright = this;
		activeright.classList.add('tactive');

		highlighted.classList.remove('active');

		highlighted = document.getElementById('high5');

		highlighted.classList.add('active');
	}
});

panelNewsItems[5].addEventListener('click', function () {
	clearInterval(newsSlideShow);
	if (this != activeright) {
		activeright.classList.remove('tactive');
		activeright = this;
		activeright.classList.add('tactive');

		highlighted.classList.remove('active');

		highlighted = document.getElementById('high6');

		highlighted.classList.add('active');
	}
});
