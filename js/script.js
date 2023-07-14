//Menu
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
burger.addEventListener('click', function(event) {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.documentElement.classList.toggle('lock');
});

function closeNav() {
  var closemenu = document.querySelector('.menu');
  var closeburger = document.querySelector('.burger');
  closemenu.classList.remove('active');
  closeburger.classList.remove('active');
  document.documentElement.classList.remove('lock');
}


//Swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevv",
    },
  });

  var swiper_2 = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-nexttt",
      prevEl: ".swiper-button-prevvv",
    },
  });
