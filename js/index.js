const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const topNav = document.querySelector('a')
const firstNav = topNav.nextElementSibling
const secondNav = firstNav.nextElementSibling
const thirdNav = secondNav.nextElementSibling
const fourthNav = thirdNav.nextElementSibling
const fifthNav = fourthNav.nextElementSibling
const sixthNav = fifthNav.nextElementSibling

topNav.textContent = 'Services'
firstNav.textContent = 'Product'
secondNav.textContent = 'Vision'
thirdNav.textContent = 'Features'
fourthNav.textContent = 'About'
fifthNav.textContent = 'Contact'

topNav.style.color = 'Green'
firstNav.style.color = 'Green'
secondNav.style.color = 'Green'
thirdNav.style.color = 'Green'
fourthNav.style.color = 'Green'
fifthNav.style.color = 'Green'


const imgPusher = document.querySelector('#cta-img')
imgPusher.src= 'img/header-img.png'

const txtPusher = document.querySelector('h1')
txtPusher.textContent = 'DOM IS AWESOME'
const btnTxtPusher = document.querySelector('button')
btnTxtPusher.textContent = 'Get Started'



// document.createElement('.top-content h4')
// document.createElement('.bottom-content h4')
const wholeTop = document.querySelector('.top-content')
const oneMid = document.querySelector('.top-content h4')
const oneMidText = document.querySelector('.top-content p')



oneMid.textContent = 'Features'
oneMidText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, atimperdiet metusscelerisque quis.'


const secImgPusher = document.querySelector('.middle-img')
secImgPusher.src = 'img/mid-page-accent.jpg'
/*
const midTopText = document.querySelector('.top-content')
midTopText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const secImgPusher = document.querySelector('.middle-img #middle-img')
secImgPusher.src = 'img/mid-page-accent.jpg'

const botText = document.querySelector('.bottom-content')
botText.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
*/
const oneLow = document.querySelector('.bottom-content h4')
const oneLowText = document.querySelector('.bottom-content p')

oneLow.textContent = 'Services'
oneLowText.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, atimperdiet metusscelerisque quis.'

const bigFootTitle = document.querySelector('.contact h4')
const bigFootText1 = document.querySelector('.contact p')
const lilFootText2 = bigFootText1.nextElementSibling
const lilFootText3 = lilFootText2.nextElementSibling
//const lilFootText4 = lilFootText3.nextElementSibling


bigFootTitle.textContent = 'Contact'
bigFootText1.textContent = '123 Way 456 Street Somewhere, USA'
lilFootText2.textContent = '1 (888) 888-8888'
lilFootText3.textContent = 'sales@greatidea.io'


const touchFoot = document.querySelector('footer p')
touchFoot.textContent = 'Copyright Great Idea! 2018'




//'123 Way 456 Street Somewhere, USA 1 (888) 888-8888 sales@greatidea.io' 

