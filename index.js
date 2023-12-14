const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

function handleMenu(){
    menuIcon.addEventListener("click", ()=>{
        menu.classList.toggle("show");
    })
}

function closeMenu(){
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
    }
}