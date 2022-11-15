let logos = document.querySelector("#logos");
let showUno = document.querySelector("#indexTextoUno");
let showDos = document.querySelector("#indexTextoDos");
let showTres = document.querySelector("#indexTextoTres");

function que (){
    return console.log(window.scrollY);
}


function animationLogos (){
   if (window.scrollY >= 23 && !logos.classList.contains("opacity")){
        return logos.className += " opacity";
    }
}
window.addEventListener("scroll", animationLogos);


function animationShowUno(){
    if (window.scrollY >= 240 && !showUno.classList.contains("right")){
        return showUno.className += " right";
    }
}
window.addEventListener("scroll", animationShowUno);

function animationShowDos(){
    if (window.scrollY >= 635 && !showDos.classList.contains("left")){
        return showDos.className += " left";
    }
}
window.addEventListener("scroll", animationShowDos);

function animationShowTres(){
    if (window.scrollY >= 1036 && !showTres.classList.contains("right")){
        return showTres.className += " right";
    }
}
window.addEventListener("scroll", animationShowTres);

// animacion seccion de show

let shoSection = document.querySelector("#showSection");

function animationShowSection(){
    if (window.scrollY >= 93 && !showSection.classList.contains("left")){
        return showSection.className += " left";
    }
}
window.addEventListener("scroll", animationShowSection);