// мобильное меню
const menuBurger = document.querySelector('.nav__burger');
if (menuBurger) {
	const menuBody = document.querySelector('.nav__menu');
	const logoMobile = document.querySelector('.nav__logo');
	const menuHeader = document.querySelector('.nav__body');
	const submenuBtn = document.querySelector('.nav__link_btn');
	const submenuBody = document.querySelector('.submenu');

	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
		document.body.classList.toggle('lock');
		logoMobile.classList.toggle('active');
		menuHeader.classList.toggle('active');

		//раскрывающийся список submenu в мобильном меню
		submenuBtn.addEventListener("click", function (e) {
			submenuBtn.classList.toggle('open');
			submenuBody.classList.toggle('open');
		});
	});

}

//фиксированное меню
window.onscroll = function showHeader() {
	const header = document.querySelector(".header");
	const nav = document.querySelector(".nav");
	const navOffset = nav.offsetHeight;

	if (window.pageYOffset > 60) {
		nav.classList.add("fixed");
	} else {
		nav.classList.remove("fixed");
	}
}

//worksteps swiper
const worksteps = new Swiper('.worksteps__container', {
	loop: false,
	speed: 800,
	spaceBetween: 16,
	centeredSlides: false,
	slidesPerView: "auto",
	keyboard: {
		enabled: true,
	},

	navigation: {
		nextEl: '.worksteps__swiper-arrow-next',
		prevEl: '.worksteps__swiper-arrow-prev',
	},

});

//news swiper
const news = new Swiper('.news__container', {
	loop: false,
	speed: 800,
	spaceBetween: 30,
	centeredSlides: false,
	simulateTouch: true,
	touchRatio: 1,
	slidesPerView: "auto",
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	navigation: {
		nextEl: '.news__swiper-arrow-next',
		prevEl: '.news__swiper-arrow-prev',
	},

	breakpoints: {
		0: {
			simulateTouch: false,
		},
		748: {
			touchRatio: 1,
			simulateTouch: true,
			mousewheel: {
				sensitivity: 1,
				EventTarget: '.news__container',
			},
		},
	},

});

//feedback swiper
const feedback = new Swiper('.feedback__container', {
	loop: false,
	speed: 800,
	spaceBetween: 24,
	centeredSlides: false,
	simulateTouch: true,
	touchRatio: 1,
	slidesPerView: "auto",
	slideToClickedSlide: true,
	freeMode: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	mousewheel: {
		sensitivity: 1,
		EventTarget: '.feedback__container',
	},

	navigation: {
		nextEl: '.feedback__swiper-arrow-next',
		prevEl: '.feedback__swiper-arrow-prev',
	},

	pagination: {
		el: '.feedback__swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
			touchRatio: 1,
			centeredSlides: true,
		},
		995: {
			slidesPerView: "auto",
			spaceBetween: 32,
			touchRatio: 1,
			simulateTouch: true,
			freeMode: true,
		},
	},

});


//checkbox'ы
const checkBox = document.querySelector('.form-connect__marketplaces-item');
checkBox.onclick = function () {
	checkBox.classList.toggle('active');
}

//marketplaces
const switchOn = document.querySelector('.switch');
const checked = switchOn.querySelector('.switch__body');
const switchText = switchOn.querySelector('.switch__text');
const marketplacesAdded = document.querySelector('.popup-connect__added');
const listOfMarketplaces = document.querySelector('.popup-connect__list');

checked.onclick = function () {
	listOfMarketplaces.classList.toggle('active');
	marketplacesAdded.classList.toggle('active');
	switchText.innerHTML = 'Работаю с маркетплейсами';
	if (listOfMarketplaces.classList.contains('active')) {
		switchOn.style.marginBottom = "40px";
	}
	else {
		switchOn.style.marginBottom = "0";
		switchText.innerHTML = 'Не работаю с маркетплейсами';
	}

}

// question
window.addEventListener("click", function (event) {
	if (event.target.hasAttribute('data-spoller')) {

		const question = event.target.closest('.item');
		const button = question.querySelector('.item__btn');
		const spoller = question.querySelector('.item__body');
		const iconQuestion = question.querySelector('.item__icon');

		question.classList.toggle('open');
		spoller.classList.toggle('open');
		button.classList.toggle('open');
		iconQuestion.classList.toggle('open');

		if (spoller.classList.contains('open')) {
			spoller.style.maxHeight = spoller.scrollHeight + 'px';
		} else {
			spoller.style.maxHeight = 0;
		}
	};
});

//popup connect
const popupConnectButton = document.querySelector('.button-connect__button');
const popupConnectBody = document.querySelector('.popup-connect');
const popupConnectClose = document.querySelector('.popup-connect__close');

popupConnectButton.addEventListener("click", function (e) {
	popupConnectBody.classList.add('open');
	document.body.classList.add('lock');
});
popupConnectClose.addEventListener("click", function (e) {
	popupConnectBody.classList.remove('open');
	document.body.classList.remove('lock');
});
