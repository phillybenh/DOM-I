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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"]; //just checking to make sure this way works with siteContent
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//## Task 1: Create selectors to point your data into elements

//Header
const navOne = document.querySelector('a:nth-of-type(1)');
// console.log(navOne);
const navTwo = document.querySelector('a:nth-of-type(2)');
// console.log(navTwo);
const navThree = document.querySelector('a:nth-of-type(3)');
const navFour = document.querySelector('a:nth-of-type(4)');
const navFive = document.querySelector('a:nth-of-type(5)');
const navSix = document.querySelector('a:nth-of-type(6)');

//CTA
const ctaHeading = document.querySelector('h1');
const ctaBtn = document.querySelector('button');
const ctaImg = document.querySelector('#cta-img');

//Main Content
const featHeading = document.querySelector('.top-content .text-content:first-child h4');
// console.log(featHeading);
const featText = document.querySelector('.top-content .text-content:first-child p');
// console.log(featText);
const aboutHeading = document.querySelector('.top-content .text-content:last-child h4');
// console.log(aboutHeading);
const aboutText = document.querySelector('.top-content .text-content:last-child p');
// console.log(aboutText);
const mainImg = document.querySelector('#middle-img');
const servicesHeading = document.querySelector('.bottom-content .text-content:first-child h4');
const servicesText = document.querySelector('.bottom-content .text-content:first-child p');
const productHeading = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
const productText = document.querySelector('.bottom-content .text-content:nth-child(2) p');
const visionHeading = document.querySelector('.bottom-content .text-content:last-child h4');
const visionText = document.querySelector('.bottom-content .text-content:last-child p');

//Contact
const contactHeading = document.querySelector('.contact h4');
const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
const contactEmail = document.querySelector('.contact p:nth-of-type(3)');

//Footer
const copyright = document.querySelector('footer p');

//## Task 2: Update the HTML with the JSON data

//Header
navOne.textContent = siteContent["nav"]["nav-item-1"];
navTwo.textContent = siteContent["nav"]["nav-item-2"];
navThree.textContent = siteContent["nav"]["nav-item-3"];
navFour.textContent = siteContent["nav"]["nav-item-4"];
navFive.textContent = siteContent["nav"]["nav-item-5"];
navSix.textContent = siteContent["nav"]["nav-item-6"];

//CTA
ctaHeading.textContent = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

//Main Content
featHeading.textContent = siteContent["main-content"]["features-h4"];
featText.textContent = siteContent["main-content"]["features-content"];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];
mainImg.src = siteContent["main-content"]["middle-img-src"];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
servicesText.textContent = siteContent["main-content"]["services-content"];
productHeading.textContent = siteContent["main-content"]["product-h4"];
productText.textContent = siteContent["main-content"]["product-content"];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
visionText.textContent = siteContent["main-content"]["vision-content"];

//Contact
contactHeading.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = siteContent["contact"]["address"];
contactPhone.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];

//Footer
copyright.textContent = siteContent["footer"]["copyright"];

//## Task 3: Add new content
//* Change the color of the navigation text to be green.
const navText = document.querySelectorAll('nav a');
console.log(navText);
navText.forEach(item => {
  item.style.color = 'green';
});

//* Utilize`.appendChild()` and`.prepend()` to add two new items to the navigation system.You can call them whatever you want.

// const navElement = document.querySelector('nav'); don't really need this

const firstItem = document.createElement('a');
firstItem.textContent = "First Thing";
document.querySelector('nav').prepend(firstItem);

const lastItem = document.createElement('a');
lastItem.textContent = "Last Thing";
document.querySelector('nav').append(lastItem);

// ## Stretch Goals
//   * [] Update styles throughout the page as you see fit.Study what happens when you updated the DOM using style in JavaScript.  
// * [] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.


// ## Stretch Project: Digital Timer
// This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get. 