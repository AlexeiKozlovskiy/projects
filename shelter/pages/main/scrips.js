
const iconMenu =  document.querySelector('.header__burger');
const headerLogo = document.querySelector('.headerLogo')
const menuBody = document.querySelector('.nav__burger');
const exitMenus = document.querySelectorAll('.menuItem');
const bodyBlack = document.querySelector('.fon__blacke'); 

// лого бургера

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        headerLogo.classList.toggle('none');
        bodyBlack.classList.toggle('active');
    });
}
 

// закрытие бургера

if(exitMenus.length>0){
    for(let index=0; index<exitMenus.length; index++) {
        const exitMenu = exitMenus[index];
        exitMenu.addEventListener('click', function (e) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        headerLogo.classList.remove('none');
        document.body.classList.remove('lock');
        bodyBlack.classList.remove('active');
        });
    }
}

// закрытие бургера по тапу вне бургера

if(bodyBlack){
    bodyBlack.addEventListener("click", function(e){
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        headerLogo.classList.remove('none');
        document.body.classList.remove('lock');
        bodyBlack.classList.remove('active');

    });
}

//            слайдер   


new Swiper('.image-slider', {
    navigation: {
        nextEl: '.button_arrowR',
        prevEl: '.button_arrowL',
        },
breakpoints: {
    300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
        loop: true,
        // simulateTouch: false,
        touchRatio: 0,
    },
    766:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
        loop: true,
        // simulateTouch: false,
        touchRatio: 0,
    },
    1201:{
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3,
        loop: true,
        // simulateTouch: false,
        touchRatio: 0,
        // slideToClickedSlide: true,
    },
}
});

            //  попап

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding');
const closePopup = document.querySelector('.close-popup');


let unlock = true;

const timeout = 800;

if(popupLinks.length>0){
    for(let index=0; index<popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            // e.preventDefault();
        });
    }
}

function popupOpen(curentPopup){
    if(curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
        popupClose(popupActive, false);
    } else {

    }
    curentPopup.classList.add('open');
    document.body.classList.toggle('lock');

    closePopup.addEventListener('click', function (e) {
        popup.classList.remove('open')
        document.body.classList.remove('lock');
      
    })
    curentPopup.addEventListener('click', function(e){
        if(!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        }
    });
    }
}

function popupClose (popupActive, doUnlock = true) {
if(unlock) {
    document.body.classList.remove('lock');
    popupActive.classList.remove('open');

    if(doUnlock) {
    
    }
}
}

            // контент попапа


    const infoPets = `[
        {
            "name": "Jennifer",
            "img": "../../assets/images/pets-jennifer.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Sophia",
            "img": "../../assets/images/pets-sophia.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Woody",
            "img": "../../assets/images/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "name": "Scarlett",
            "img": "../../assets/images/pets-scarlet.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Katrine",
            "img": "../../assets/images/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Timmy",
            "img": "../../assets/images/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "name": "Freddie",
            "img": "../../assets/images/pets-freddie.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Charly",
            "img": "../../assets/images/pets-charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        }
        ]`
        
        

const petInfo = JSON.parse(infoPets)
const image = document.querySelector('.img');
const name_popap = document.querySelector('.name');
const type = document.querySelector('.type');
const breed = document.querySelector('.breed');
const description = document.querySelector('.description');
const age = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');


const katerineBtnMore = document.querySelector('.katerineBtnMore')
const jeniferBtnMore = document.querySelector('.jeniferBtnMore')
const woodyBtnMore = document.querySelector('.woodyBtnMore')
const sophiaBtnMore = document.querySelector('.sophiaBtnMore')
const timmyBtnMore = document.querySelector('.timmyBtnMore')
const charlyBtnMore = document.querySelector('.charlyBtnMore')
const scarlettBtnMore = document.querySelector('.scarlettBtnMore')
const freddieBtnMore = document.querySelector('.freddieBtnMore')


const katerine = document.querySelectorAll('.katerine')
if(katerine.length>0){
    for(let index=0; index<katerine.length; index++) {
        const katerines = katerine[index];
        katerines.addEventListener('click', function (e) {
            document.querySelector(".katerineBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[4].img})`;
            name_popap.innerHTML=petInfo[4].name;
            type.innerHTML=petInfo[4].type+(' - ');
            breed.innerHTML=petInfo[4].breed;
            description.innerHTML=petInfo[4].description;
            age.innerHTML=petInfo[4].age
            inoculations.innerHTML=petInfo[4].inoculations
            diseases.innerHTML=petInfo[4].diseases
            parasites.innerHTML=petInfo[4].parasites
        })

    }
}    
const jenifer = document.querySelectorAll('.jenifer')
if(jenifer.length>0){
    for(let index=0; index<jenifer.length; index++) {
        const jenifers = jenifer[index];
        jenifers.addEventListener('click', function (e) {
            document.querySelector(".jeniferBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[0].img})`;
            name_popap.innerHTML=petInfo[0].name;
            type.innerHTML=petInfo[0].type+(' - ');
            breed.innerHTML=petInfo[0].breed;
            description.innerHTML=petInfo[0].description;
            age.innerHTML=petInfo[0].age
            inoculations.innerHTML=petInfo[0].inoculations
            diseases.innerHTML=petInfo[0].diseases
            parasites.innerHTML=petInfo[0].parasites
        })
    }
}    

const woody = document.querySelectorAll('.woody')
if(woody.length>0){
    for(let index=0; index<woody.length; index++) {
        const woodys = woody[index];
        woodys.addEventListener('click', function (e) {
            document.querySelector(".woodyBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[2].img})`;
            name_popap.innerHTML=petInfo[2].name;
            type.innerHTML=petInfo[2].type+(' - ');
            breed.innerHTML=petInfo[2].breed;
            description.innerHTML=petInfo[2].description;
            age.innerHTML=petInfo[2].age
            inoculations.innerHTML=petInfo[2].inoculations
            diseases.innerHTML=petInfo[2].diseases
            parasites.innerHTML=petInfo[2].parasites
        })
    }
}    

const sophia = document.querySelectorAll('.sophia')
if(woody.length>0){
    for(let index=0; index<sophia.length; index++) {
        const sophias = sophia[index];
        sophias.addEventListener('click', function (e) {
            document.querySelector(".sophiaBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[1].img})`;
            name_popap.innerHTML=petInfo[1].name;
            type.innerHTML=petInfo[1].type+(' - ');
            breed.innerHTML=petInfo[1].breed;
            description.innerHTML=petInfo[1].description;
            age.innerHTML=petInfo[1].age
            inoculations.innerHTML=petInfo[1].inoculations
            diseases.innerHTML=petInfo[1].diseases
            parasites.innerHTML=petInfo[1].parasites
        })
    }
}   

const timmy = document.querySelectorAll('.timmy')
if(woody.length>0){
    for(let index=0; index<timmy.length; index++) {
        const timmys = timmy[index];
        timmys.addEventListener('click', function (e) {
            document.querySelector(".timmyBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[5].img})`;
            name_popap.innerHTML=petInfo[5].name;
            type.innerHTML=petInfo[5].type+(' - ');
            breed.innerHTML=petInfo[5].breed;
            description.innerHTML=petInfo[5].description;
            age.innerHTML=petInfo[5].age
            inoculations.innerHTML=petInfo[5].inoculations
            diseases.innerHTML=petInfo[5].diseases
            parasites.innerHTML=petInfo[5].parasites
        })
    }
}   

const charly = document.querySelectorAll('.charly')
if(woody.length>0){
    for(let index=0; index<charly.length; index++) {
        const charlys = charly[index];
        charlys.addEventListener('click', function (e) {
            document.querySelector(".charlyBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[7].img})`;
            name_popap.innerHTML=petInfo[7].name;
            type.innerHTML=petInfo[7].type+(' - ');
            breed.innerHTML=petInfo[7].breed;
            description.innerHTML=petInfo[7].description;
            age.innerHTML=petInfo[7].age
            inoculations.innerHTML=petInfo[7].inoculations
            diseases.innerHTML=petInfo[7].diseases
            parasites.innerHTML=petInfo[7].parasites
        })
    }
}  

const scarlett = document.querySelectorAll('.scarlett')
if(woody.length>0){
    for(let index=0; index<charly.length; index++) {
        const scarletts = scarlett[index];
        scarletts.addEventListener('click', function (e) {
            document.querySelector(".scarlettBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[3].img})`;
            name_popap.innerHTML=petInfo[3].name;
            type.innerHTML=petInfo[3].type+(' - ');
            breed.innerHTML=petInfo[3].breed;
            description.innerHTML=petInfo[3].description;
            age.innerHTML=petInfo[3].age
            inoculations.innerHTML=petInfo[3].inoculations
            diseases.innerHTML=petInfo[3].diseases
            parasites.innerHTML=petInfo[3].parasites
        })
    }
}  
const freddie = document.querySelectorAll('.freddie')
if(woody.length>0){
    for(let index=0; index<freddie.length; index++) {
        const freddies = freddie[index];
        freddies.addEventListener('click', function (e) {
            document.querySelector(".freddieBtnMore").click();
            image.style.backgroundImage = `url(${petInfo[6].img})`;
            name_popap.innerHTML=petInfo[6].name;
            type.innerHTML=petInfo[6].type+(' - ');
            breed.innerHTML=petInfo[6].breed;
            description.innerHTML=petInfo[6].description;
            age.innerHTML=petInfo[6].age
            inoculations.innerHTML=petInfo[6].inoculations
            diseases.innerHTML=petInfo[6].diseases
            parasites.innerHTML=petInfo[6].parasites
        })
    }
}  
