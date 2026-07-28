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



















