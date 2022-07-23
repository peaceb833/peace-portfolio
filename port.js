const navtoogle =document.querySelector(".nav-toggle");
const navlink = document.querySelectorAll('.nav-link');
const active = document.querySelectorAll('.nav-link');
const work=document.querySelector('#work');
const intro= document.querySelector('.section-subtitle-intro');

navtoogle.addEventListener('click',()=>{
document.body.classList.toggle("nav-open")
});

navlink.forEach(link => {
    link.addEventListener('click' ,() => {
        document.body.classList.remove("nav-open");
     });
});

work.addEventListener('click',function(){
   intro.text('love');
})






