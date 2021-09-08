burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');


 burger.addEventListener('click',()=>{
rightnav.classList.toggle('v-nav-rsp')
navlist.classList.toggle('v-nav-rsp')
navbar.classList.toggle('h-nav-rsp')
});


//function dropdown(){
//    rightnav.classList.toggle('v-nav-rsp')
//navlist.classList.toggle('v-nav-rsp')
//navbar.classList.toggle('h-nav-rsp')
//}
//
//
//
//
//
//
//
//
//burger.addEventListener('click',dropdown);
