const hamburgerContainer=document.querySelector("#header-main-nav"),hamburger=document.querySelector(".header-main-nav-hamburger"),links=document.querySelectorAll(".header-main-nav-links li"),holder=document.getElementsByClassName("a-field-content-icon-holder"),leaf1=document.getElementsByClassName("leaf-1"),leaf2=document.getElementsByClassName("leaf-2"),heading=document.getElementsByClassName("a-field-content-heading"),content=document.getElementsByClassName("a-field-content-info"),graphdeslink=document.getElementById("graphdeslink"),coverleft=document.getElementById("cover-left");hamburger.addEventListener("click",()=>{hamburgerContainer.classList.toggle("clicked"),links.forEach(e=>{e.classList.toggle("fade")})});for(let e=0;e<=holder.length;e++)holder[e].addEventListener("click",()=>{leaf1[e].classList.toggle("leaf-1-clicked"),leaf2[e].classList.toggle("leaf-2-clicked"),holder[e].classList.toggle("holder-clicked"),heading[e].classList.toggle("heading-clicked"),content[e].classList.toggle("content-clicked")});