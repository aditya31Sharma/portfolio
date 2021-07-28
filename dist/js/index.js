const hamburgerContainer=document.querySelector("#header-main-nav");
const hamburger=document.querySelector('.header-main-nav-hamburger');
const links=document.querySelectorAll('.header-main-nav-links li');

const holder=document.getElementsByClassName('a-field-content-icon-holder');
const leaf1=document.getElementsByClassName('leaf-1')
const leaf2=document.getElementsByClassName('leaf-2')
const heading=document.getElementsByClassName('a-field-content-heading');
const content=document.getElementsByClassName('a-field-content-info');

const graphdeslink=document.getElementById('graphdeslink');
const coverleft=document.getElementById('cover-left');
hamburger.addEventListener('click',()=>{
    hamburgerContainer.classList.toggle('clicked');
    links.forEach((link)=>{
        link.classList.toggle('fade');
    })
})
let j=0;
for (j=0;j<=holder.length;j++){

    holder[j].addEventListener('click',()=>{
        leaf1[j].classList.toggle('leaf-1-clicked');
        leaf2[j].classList.toggle('leaf-2-clicked');
        holder[j].classList.toggle('holder-clicked');
        heading[j].classList.toggle('heading-clicked');
        content[j].classList.toggle('content-clicked');
    })

}
