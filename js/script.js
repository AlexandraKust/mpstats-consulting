// мобильное меню
const menuBurger = document.querySelector('.nav__burger');
if (menuBurger) {
	const menuBody = document.querySelector('.nav__menu');
	const logoBlack = document.getElementById('logo_black');
	const logoWhite = document.getElementById('logo_white');
	const iconClick = document.querySelector('.nav__btn_msg');
	const iconClick1 = document.querySelector('.nav__btn_call');
	const iconClick2 = document.querySelector('.nav__btn_login');
	const logoMobile = document.querySelector('.nav__logo');


	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
		document.body.classList.toggle('lock');
		logoBlack.classList.toggle('change');
		logoWhite.classList.toggle('change');
		iconClick.classList.toggle('black');
		iconClick1.classList.toggle('black');
		iconClick2.classList.toggle('black');
		logoMobile.classList.toggle('active');
	});
}

// кнопка наверх
var scrollToTopBtn = document.querySelector('.footer__arrowup');
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// spoller
const button = document.querySelector('.list__btn');
const spoller = document.querySelector('.list__body');
const bg = document.querySelector('.main');

button.addEventListener('click', function (e) {
	spoller.classList.toggle('open');
	button.classList.toggle('open');

	if (spoller.classList.contains('open')) {
		spoller.style.maxHeight = spoller.scrollHeight + 'px';
		bg.style.backgroundPosition = "0 100px";
	} else {
		spoller.style.maxHeight = 0;
		bg.style.backgroundPosition = "0 -25px";
	}
});

// проверка заполняемости полей
function validate() {
	const email = document.forms['form']['email'].value;
	const password = document.forms['form']['password'].value;
	const inputEmail = document.getElementById('email');
	const inputPassword = document.getElementById('password');

	if (email.length == 0 || password.length == 0) {
		inputEmail.style.border = "1px solid #E35B63";
		inputEmail.placeholder = 'Нужно заполнить';
		inputEmail.classList.add('red');
		inputPassword.style.border = "1px solid #E35B63";
		inputPassword.placeholder = 'Нужно заполнить';
		inputPassword.classList.add('red');
		return false;
	}
	else if (email.length > 0 || password.length > 0) {
		inputEmail.style.border = "1px solid #38AC5A";
		inputPassword.style.border = "1px solid #38AC5A";
	}

	const dog = email.indexOf("@");
	const dot = email.indexOf(".");

	if (dog < 1 || dot < 1) {
		inputEmail.style.border = "1px solid #E35B63";
		inputEmail.value = "";
		inputEmail.placeholder = "Email введен неверно";
		inputEmail.classList.add('red');
		return false;
	}
}

//фиксированное меню
window.onscroll = function showHeader() {
	const header = document.querySelector(".header");
	const nav = document.querySelector(".nav");
	const navOffset = nav.offsetHeight;

	let scrollWidth = Math.max(
		document.body.scrollWidth, document.documentElement.scrollWidth,
		document.body.offsetWidth, document.documentElement.offsetWidth,
		document.body.clientWidth, document.documentElement.clientWidth
	);

	if (window.pageYOffset > navOffset) {
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
	slidesPerView: "auto",
	keyboard: {
		enabled: true,
	},

	navigation: {
		nextEl: '.news__swiper-arrow-next',
		prevEl: '.news__swiper-arrow-prev',
	},

});

//feedback swiper
const feedback = new Swiper('.feedback__container', {
	loop: true,
	speed: 800,
	spaceBetween: 24,
	centeredSlides: true,
	slidesPerView: "auto",
	keyboard: {
		enabled: true,
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
			simulateTouch: true,
			touchRatio: 1,
		},
		995: {
			slidesPerView: "auto",
			spaceBetween: 24,
		},
	},

});

