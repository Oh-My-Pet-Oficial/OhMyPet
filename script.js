let listBanner = document.querySelector('main .slider .list');
let itemsBanner = document.querySelectorAll('main .slider .list .item');
let dotsBanner = document.querySelectorAll('main .slider .dots li');
let prevBanner = document.getElementById('prev');
let nextBanner = document.getElementById('next');

let active = 0;
let lengthItemsBanner = itemsBanner.length - 1;

nextBanner.addEventListener('click', function() {
    if (active + 1 > lengthItemsBanner) {
        active = 0;
    }else {
        active = active + 1;
    }

    reloadSlider();
});

prevBanner.addEventListener('click', function() {
    if(active - 1 < 0) {
        active = lengthItemsBanner;
    } else {
        active = active - 1;
    }
    reloadSlider();
});

const reloadSlider = () => {
    let checkleft = itemsBanner[active].offsetLeft;
    listBanner.style.left = - checkleft + 'px';
}

// // Header
// let menu = document.getElementById('menu');
// let iconBars = document.getElementById('icon-bars');
// let iconX = document.getElementById('icon-x');

// const openCloseMenu = () =>{
//     if ( menu.classList.contains("menu-closed") ) {
//         menu.classList.remove("menu-closed");

//         iconBars.style.display = "none";
        
//         iconX.style.display = "inLine";  
//     }
//     else {
//         menu.classList.add("menu-closed");

//         iconX.style.display = "none";

//         iconBars.style.display = "inLine";
//     }
// }

// const menuResponsive = () => {
//     const mediaQuery = window.matchMedia('(max-width: 1350px)');
//     if (mediaQuery.matches) {
//         menu.classList.add("menu-closed");
//         iconX.style.display = "none";
//         iconBars.style.display = "inLine";
//     }else {
//         if(menu.classList.contains("menu-closed")){
//             menu.classList.remove("menu-closed");
//             iconX.style.display = "none";
//             iconBars.style.display = "inLine";
//         }
//     }
// }

document.addEventListener('DOMContentLoaded', () =>{
    menuResponsive();
});

window.addEventListener('resize', () => {
    menuResponsive();
})