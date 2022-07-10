// бургер
const iconMenu =  document.querySelector('.header__burger');
const headerLogo = document.querySelector('.headerLogo')
const menuBody = document.querySelector('.nav__burger');
const exitMenus = document.querySelectorAll('.menuItem');
const bodyBlack = document.querySelector('.fon__blacke'); 


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
    
    
    
    const katerine = document.getElementsByClassName('katerine')
    if(katerine.length>0){
        for(let index=0; index<katerine.length; index++) {
            const katerines = katerine[index];

            katerines.addEventListener('click', function (e) {
                document.querySelector(".katerineBtnMore").click();
            })
    
        }
    }    
    
        // клик по petCards кликает по BtnMore

    const jenifer = document.getElementsByClassName('jenifer')
    if(jenifer.length>0){
        for(let index=0; index<jenifer.length; index++) {
            const jenifers = jenifer[index];
            jenifers.addEventListener('click', function (e) {
                document.querySelector(".jeniferBtnMore").click();
            })
        }
    }    

    const woody = document.getElementsByClassName('woody')
    if(woody.length>0){
        for(let index=0; index<woody.length; index++) {
            const woodys = woody[index];
            woodys.addEventListener('click', function (e) {
                document.querySelector(".woodyBtnMore").click();
            })
        }
    }    

    const sophia = document.getElementsByClassName('sophia')
    if(sophia.length>0){
        for(let index=0; index<sophia.length; index++) {
            const sophias = sophia[index];
            sophias.addEventListener('click', function (e) {
                document.querySelector(".sophiaBtnMore").click();
            })
        }
    }   

    const timmy = document.getElementsByClassName('timmy')
    if(timmy.length>0){
        for(let index=0; index<timmy.length; index++) {
            const timmys = timmy[index];
            timmys.addEventListener('click', function (e) {
                document.querySelector(".timmyBtnMore").click();
            })
        }
    }   

    const charly = document.getElementsByClassName('charly')
    if(charly.length>0){
        for(let index=0; index<charly.length; index++) {
            const charlys = charly[index];
            charlys.addEventListener('click', function (e) {
                document.querySelector(".charlyBtnMore").click();
            })
        }
    }  

    const scarlett = document.getElementsByClassName('scarlett')
    if(scarlett.length>0){
        for(let index=0; index<charly.length; index++) {
            const scarletts = scarlett[index];
            scarletts.addEventListener('click', function (e) {
                document.querySelector(".scarlettBtnMore").click();
            })
        }
    }  
    const freddie = document.getElementsByClassName('freddie')
    if(freddie.length>0){
        for(let index=0; index<freddie.length; index++) {
            const freddies = freddie[index];
            freddies.addEventListener('click', function (e) {
                document.querySelector(".freddieBtnMore").click();
            })
        }
    }  

    //   пагинатор

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
      const petCards = document.querySelectorAll('.petCard')
      const changePageBtns = document.querySelectorAll('.button-pagination')
      const pageNumberBtn = document.querySelector('.button-pagination-active')
      const firstPageBtn = changePageBtns[0]
      const previousPageBtn = changePageBtns[1]
      const nextPageBtn = changePageBtns[2]
      const lastPageBtn = changePageBtns[3]
      const petNames = document.querySelectorAll('.pet-name')
      const petCardImages = document.querySelectorAll('.pet-card-image')
      let pageNumber = 1
      let lastPageNum = 6
      let cardIndexArr = []
    
    const GenerateWidth1280 = () => {
    let arr = []
        for (i = 0; i < 6; i++) {
        for (j = 0; j < 8; j++) {
        let x = Math.floor(Math.random() * 8)
        if (arr.includes(x)) {
            j = j - 1
        } else {
            arr.push(x)
        }
        }
        cardIndexArr.push(arr)
        arr = []
        }
        return cardIndexArr
    }
    const GenerateWidth768 = () => {
        cardIndexArr = []
        let arr = [0, 1, 2, 3, 4, 5, 6, 7]
        let arr2 = []
        let arr3 = []
        for (i = 0; i < 6; i++) {
            arr2.push(...arr)
        }
        for (i = 0; i < 48; i += 6) {
            arr3 = []
            arr3 = arr2.slice(i, i + 6).sort(() => Math.random() - 0.5)
            cardIndexArr.push(arr3)
            cardIndexArr.sort(() => Math.random() - 0.5)
        }
        
        return cardIndexArr
    
    }
    const GenerateWidth320 = () => {
      cardIndexArr = []
      let arr = [0, 1, 2, 3, 4, 5, 6, 7]
      let arr2 = []
      let arr3 = []
      for (i = 0; i < 6; i++) {
        arr2.push(...arr)
      }
      for (i = 0; i < 48; i += 3) {
        arr3 = []
        arr3 = arr2.slice(i, i + 3).sort(() => Math.random() - 0.5)
        cardIndexArr.push(arr3)
        cardIndexArr.sort(() => Math.random() - 0.5)
      }
      
      return cardIndexArr
      
    }
    
    const repeatCount = (arr) => {
      let resultobj = {}
      arr.forEach(item => {
        resultobj[item] = resultobj[item] + 1 || 1
      })
      console.log(resultobj)
    }
    
    
    
      const cardGenerate = () =>  {
        if (window.screen.availWidth >= 1280) {
            GenerateWidth1280()
        } if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768 ) {
            GenerateWidth768() 
        } if (window.screen.availWidth < 768) {
            GenerateWidth320()
        }
      }
    
      
    
      const generatePetCatdsContent = () => {
        let counter = 0;
        
        for (i = 0; i < petCards.length; i++) {
          let style = getComputedStyle(petCards[i])
          if (style.display == 'flex' ) {
        counter++
          }
        }
      
        lastPageNum = 48 / counter
        
        for (i = 0; i < counter; i++) {
          petNames[i].textContent = petInfo[cardIndexArr[pageNumber - 1][i]].name
          petCardImages[i].style.backgroundImage = `url(${petInfo[cardIndexArr[pageNumber - 1][i]].img})`
      }
      }
    
    
    const nextPage = () => {
        pageNumber++
        generatePetCatdsContent()
        pageNumberBtn.textContent = pageNumber
        disablePreviousBtns()
        disableNextBtns()
        
    }
    
      const lastPage = () => {
        pageNumber = lastPageNum
        generatePetCatdsContent()
        pageNumberBtn.textContent = pageNumber
        disablePreviousBtns()
        disableNextBtns()
      }
    
      const previousPage = () => {
        pageNumber--
        generatePetCatdsContent()
        pageNumberBtn.textContent = pageNumber;
        disablePreviousBtns()
        disableNextBtns()
        
      }
    
      const firstPage = () => {
        pageNumber = 1
        generatePetCatdsContent()
        pageNumberBtn.textContent = pageNumber;
        disablePreviousBtns()
        disableNextBtns()
    
      }
      
      const disableNextBtns = () => {
        if (pageNumber > 1) {
          firstPageBtn.classList.remove('disabled')
          previousPageBtn.classList.remove('disabled')
          previousPageBtn.addEventListener('click', previousPage)
          firstPageBtn.addEventListener('click', firstPage)
        } if (pageNumber == lastPageNum) {
          nextPageBtn.classList.add('disabled')
          lastPageBtn.classList.add('disabled')
          nextPageBtn.removeEventListener('click', nextPage)
          lastPageBtn.removeEventListener('clicK', lastPage)
        } 
      }
    
      const disablePreviousBtns = () => {
        if (pageNumber == 1) {
          firstPageBtn.classList.add('disabled')
          previousPageBtn.classList.add('disabled')
          previousPageBtn.removeEventListener('click', previousPage)
          firstPageBtn.removeEventListener('click', firstPage)
        } if (pageNumber < lastPageNum) {
          nextPageBtn.classList.remove('disabled')
          lastPageBtn.classList.remove('disabled')
          nextPageBtn.addEventListener('click', nextPage)
          lastPageBtn.addEventListener('click', lastPage)
        }
      }
    
    
      cardGenerate()
      generatePetCatdsContent()
      nextPageBtn.addEventListener('click', nextPage)
      lastPageBtn.addEventListener('click', lastPage)
      previousPageBtn.addEventListener('click', previousPage)
      firstPageBtn.addEventListener('click', firstPage)
      
    
       // контент попапа

      petCards.forEach(card => card.addEventListener('click', () => {
        let name = card.querySelector('.pet-name')

        for (i = 0; i < petInfo.length; i++) {
            if (name.textContent == petInfo[i].name) {
                image.style.backgroundImage = `url(${petInfo[i].img})`;
                name_popap.innerHTML=petInfo[i].name;
                type.innerHTML=petInfo[i].type+(' - ');
                breed.innerHTML=petInfo[i].breed;
                description.innerHTML=petInfo[i].description;
                age.innerHTML=petInfo[i].age
                inoculations.innerHTML=petInfo[i].inoculations
                diseases.innerHTML=petInfo[i].diseases
                parasites.innerHTML=petInfo[i].parasites
            }

            }
            
      }))