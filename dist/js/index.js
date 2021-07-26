const hamburgerContainer=document.querySelector("#header-main-nav");
const hamburger=document.querySelector('.header-main-nav-hamburger');
const links=document.querySelectorAll('.header-main-nav-links li');

const holder=document.getElementsByClassName('a-field-content-icon-holder');
const leaf1=document.getElementsByClassName('leaf-1')
const leaf2=document.getElementsByClassName('leaf-2')
const heading=document.getElementsByClassName('a-field-content-heading');
const content=document.getElementsByClassName('a-field-content-info');

hamburger.addEventListener('click',()=>{
    hamburgerContainer.classList.toggle('clicked');
    links.forEach((link)=>{
        link.classList.toggle('fade');
    })
})

for (let j=0;j<=holder.length;j++){

    holder[j].addEventListener('click',()=>{
        leaf1[j].classList.toggle('leaf-1-clicked');
        leaf2[j].classList.toggle('leaf-2-clicked');
        holder[j].classList.toggle('holder-clicked');
        heading[j].classList.toggle('heading-clicked');
        content[j].classList.toggle('content-clicked');
    })

}



// window.addEventListener('scroll', reveal);

// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');

//   for(var i = 0; i < reveals.length; i++){

//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     if(revealtop < windowheight - revealpoint){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }