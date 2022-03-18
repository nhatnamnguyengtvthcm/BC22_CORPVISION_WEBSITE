let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');

  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
};

window.addEventListener("scroll", function(){
  var header = this.document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 0)
})

$('.carousel').carousel({
  interval: 1300
})
