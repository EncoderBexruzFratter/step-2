let gutitar = document.querySelector(".header-nav-link-btn");
let guitar_text = document.querySelector(".guitars-text");

gutitar.addEventListener("click", function () {
  guitar_text.classList.toggle("h-120")
});
 let hidden = document.querySelector(".hidden")
 let hamburger = document.querySelector(".menu-btn")
 let close = document.querySelector(".close")

 hamburger.addEventListener("click" , function(){
    hidden.style.left = "0"
 })
 close.addEventListener("click" , function(){
    hidden.style.left = "-100%"
 })
