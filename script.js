//search btn
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');


}
//shopping cart btn
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//login button
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

//navbar button
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

var swiper = new Swiper('.product-slider', {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay: 4500,
      disableOnInteraction: false,},
  centerSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,},
    768: {
      slidesPerView: 2,},
    1020: {
      slidesPerView: 3,},
},
});

var swiper = new Swiper('.review-slider', {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay: 4500,
      disableOnInteraction: false,},
  centerSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,},
    768: {
      slidesPerView: 2,},
    1020: {
      slidesPerView: 3,},
},
});


//login page starts
let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const message = document.querySelector("#confirmMessage");
const submission = document.querySelector("#submitBtn");

function checkPasswordsMatch(){
    if (password.value === confirmPassword.value){
        message.textContent = "";
        submission.removeAttribute("disabled");
    }else{
        message.textContent = "passwords does not match";
    submission.setAttribute("disabled", "true");
    }
}

function checkEmail(){
    if (emailpattern.test(email.value) === true){
        message.textContent = "";
        submission.removeAttribute("disabled");
    }else{
        message.textContent = "email is not right";
        submission.setAttribute("disabled", "true");
    }
    
}


if (password && confirmPassword) {
    password.oninput = checkPasswordsMatch;
    confirmPassword.oninput = checkPasswordsMatch;
}

if (email) {
    email.oninput = checkEmail;
}

const signupForm = document.querySelector("#signup-form");
if (signupForm) {
    signupForm.onsubmit = function (event) {
        event.preventDefault();
        checkPasswordsMatch();
        checkEmail();
    };
}
//login page ends


















