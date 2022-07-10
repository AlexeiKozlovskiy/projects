const burger = document.querySelector('.burger')
const hamburger = document.querySelector('.hamburger')
const navMenuList = document.querySelector('.header-nav')
const burgerExit = document.querySelector('.burger-exit')
const navItemExit = document.querySelectorAll('.nav-item')
const bodyBlack = document.querySelector('.fon-blacke'); 

function navMenuToggleRemove () {
    hamburger.classList.toggle('open')
    navMenuList.classList.toggle('open')
    document.body.classList.remove('lockBurger');
    bodyBlack.classList.toggle('active');
}

function navMenuToggle () {
    hamburger.classList.toggle('open')
    navMenuList.classList.toggle('open')
    document.body.classList.toggle('lockBurger');
    bodyBlack.classList.toggle('active');
}

// закрытие бургера по клику на item в меню
if(navItemExit.length>0){
    for(let index=0; index<navItemExit.length; index++) {
        const navItemExits = navItemExit[index];
        navItemExits.addEventListener('click', navMenuToggleRemove)
    }
}     

bodyBlack.addEventListener('click', navMenuToggle)
burger.addEventListener('click', navMenuToggle)
burgerExit.addEventListener('click', navMenuToggle)


const popupContainer = document.querySelector('.popup-container')
const loginButton = document.querySelector('.button-login')
const loginAccount = document.querySelector('.account-login')

loginButton.addEventListener('click', () => {
    popupContainer.classList.remove('closed')
    document.body.classList.toggle('lockPopap');
})

loginAccount.addEventListener('click', () => {
    popupContainer.classList.remove('closed')
    document.body.classList.toggle('lockPopap');
})

popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.classList.add('closed') 
        document.body.classList.toggle('lockPopap');
    }
   
})


new Swiper('.carousel-wrapper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },


breakpoints: {
    310: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        simulateTouch: false,
        touchRatio: 1,
        centeredSlides: true,
        initialSlide: 0,

           
    },
    810: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        simulateTouch: true,
        touchRatio: 1,
        centeredSlides: true,
        initialSlide: 1,
    },
    1220:{
        slidesPerView: 2.1,
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: true,
        simulateTouch: true,
        touchRatio: 1,
        centeredSlides: true,
        initialSlide: 1,
    },
    1350:{
        slidesPerView: 1.74,
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: true,
        simulateTouch: true,
        touchRatio: 1,
        centeredSlides: true,
        initialSlide: 1,
    
    },
}
});




