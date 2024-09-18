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
