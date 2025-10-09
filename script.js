// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });

let elem = document.querySelector(".element");
let fixed = document.querySelector(".fixed-img")
elem.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
});

elem.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
elems.forEach(function(dets){
   dets.addEventListener("mouseenter", function(){
    let img = dets.getAttribute("data-img")
    fixed.style.backgroundImage = `url(${img})`
   })
})

function swiper(){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 50,
    });
}
swiper();


let load = document.querySelector(".loader");
setTimeout(function(){
   load.style.top = "-100%"
}, 4000);

