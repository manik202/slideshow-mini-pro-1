const slideshowElelments=document.querySelectorAll(".slideshow-element");
let countElements=1;
setInterval(()=>{
    countElements++;
    let currentElement=document.querySelector(".current");
    currentElement.classList.remove("current");

if(countElements>slideshowElelments.length){
    slideshowElelments[0].classList.add("current");
     countElements = 1;
}else{
    currentElement.nextElementSibling.classList.add("current");
}

  




},1000);









