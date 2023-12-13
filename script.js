const header = document.querySelector('.header');
const main = document.querySelector('main');

main.style.marginTop = header.offsetHeight + 'px';


// ---------------------------modal-form----------------------
const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.modal-form');
const closeSpan = document.querySelector('.form-header span');

modalBtns.forEach(modalBtn => {
  modalBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    modal.classList.add('active');
    header.classList.remove('open');

    closeSpan.addEventListener('click', () => {
      modal.classList.remove('active');
    })
  })
})

// ----------------------------burger-menu----------------------
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
  header.classList.toggle('open');
})


// ---------------------------swiper--------------------------

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
   
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // breakpoints: {

    //   '950': {
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
    //   },
    // }
  });

// ---------------------------Collapse---------------------------

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    let collBtn = document.querySelectorAll('.collapse-btn');

    if (content.style.maxHeight && collBtn[i].classList.contains('active')) {
      content.style.maxHeight = null;
      content.style.margin = '0';
      collBtn[i].classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.margin = '14px 0';
      collBtn[i].classList.add('active');
    }
  });
}