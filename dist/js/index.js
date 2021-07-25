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

for (let i=0;i<=holder.length;i++){

    holder[i].addEventListener('click',()=>{
        leaf1[i].classList.toggle('leaf-1-clicked');
        leaf2[i].classList.toggle('leaf-2-clicked');
        holder[i].classList.toggle('holder-clicked');
        heading[i].classList.toggle('heading-clicked');
        content[i].classList.toggle('content-clicked');
    })

}