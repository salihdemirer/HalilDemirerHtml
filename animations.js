var navbar = document.getElementById("navbar");
navbar.addEventListener('mouseover',function(event){
    navbar.style.backgroundColor = "black";
    navbar.style.opacity = 0.8;
    navbar.style.transition = "all 1s";
})

navbar.addEventListener('mouseleave',function(event){
    navbar.style.backgroundColor = "transparent";
})
var slogan_ = document.getElementById("slogan");
function welcome_animations(){
    slogan_.style.transition = "all 1s";
    slogan_.style.transitionDelay = "5s";
    slogan_.style.opacity=1;
    navbar.style.transition = "all 1s"
    navbar.style.transitionDelay="5.5s";
    navbar.style.opacity=1;
    slogan_.style.left=0;
}
$('.carousel').carousel({
    interval: 3500
  })

document.addEventListener('scroll', function(event) {
    if(scrollY>= 200){
        // Buraya scroll yapıldığında olacak eventlar gelecek.
    }
  
});

var screen_size = window.matchMedia("(min-width: 1440px)");
function screenTest(e) {
    if (e.matches) {
      navbar.classList.add("container");
      console.log("Container moduna geçildi.");
    } else {
      navbar.classList.remove("container");
      console.log("Container modundan çıkıldı.");
    }
  }
screen_size.addListener(screenTest);