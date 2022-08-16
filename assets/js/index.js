import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiperNews = new Swiper('.swiper-news', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    effect: 'fade',
    autoHeight: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

const swiperBestSellers = new Swiper(".swiper-best-sellers", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        550: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        830: {
        slidesPerView: 3,
        spaceBetween: 16,
        },
        1094: {
        slidesPerView: 4,
        spaceBetween: 1,
        },
    },
});
const swiperReviwes = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        830: {
        slidesPerView: 3,
        spaceBetween: 16,
        },
        915: {
        slidesPerView: 3,
        spaceBetween: 1,
        },
    },
});

const btns = new DynamicAdapt("max");  
btns.init();

const burger = document.querySelector('.header__burger')

burger.addEventListener('click', ()=> {
    document.body.classList.toggle('ShowMenu')
})

const dropDownMenuBtn = document.querySelector('.drop-down-menu__btn')
const dropDownMenuItems = document.querySelector('.drop-down-menu__items')
dropDownMenuBtn.addEventListener('click', ()=> {
    if(window.innerWidth > 600) return
    dropDownMenuItems.classList.toggle('active')
    if (dropDownMenuItems.style.maxHeight) {
        dropDownMenuItems.style.maxHeight = null;
    } else {
        dropDownMenuItems.style.maxHeight = dropDownMenuItems.scrollHeight + 'px';
    }
})

const cardsGame = document.querySelectorAll('.js--render-card')

cardsGame.forEach(element => element.innerHTML = 
`<div class="game-card">
    <div class="game-card__img">
        <img src="./assets/img/051.jpg" alt="" class="img">
    </div>
    <h5 class="game-card__title">Minecraft</h5>
    <div class="geme-card-footer">
        <span class="geme-card-footer__price">Rp 260.000</span>
        <p class="geme-card-footer__discount"><span>90%</span>Rp 260.000</p>
    </div>
    <a href="#" class="game-card__link"></a>
</div>`)

const header = document.querySelector('.header')
window.addEventListener('resize', checkHeaderColor)
window.addEventListener('scroll', checkHeaderColor)

function checkHeaderColor() {
    if(window.innerWidth < 600) return
    if ((scrollY !== 0) && (!header.classList.contains('scrolled'))) {
        header.classList.add('scrolled')
    } else if ( (scrollY === 0) && (header.classList.contains('scrolled'))) {
        header.classList.remove('scrolled')
    }
}