const backToTop = document.querySelector('#back-to-top');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop < lastScrollTop) {
    backToTop.classList.remove('show');
  } else {
    backToTop.classList.add('show');
  }
  lastScrollTop = scrollTop;
});