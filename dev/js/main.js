
let cross = document.getElementsByClassName('cross')[0];
let burgerMenu = document.getElementsByClassName('burger-menu')[0];
let canvas = document.getElementsByClassName('canvas')[0];
let overlay = document.getElementsByClassName('overlay')[0];


burgerMenu.addEventListener('click', function() {
    canvas.style.transform = 'translate(0%)';
    overlay.classList.add('over');
    overlay.style.opacity = .6

})

function over() {
    canvas.style.transform = 'translate(100%)';
    overlay.style.opacity = 0;
    setTimeout(() => {
        overlay.classList.remove('over');
    }, 500);
}

cross.addEventListener('click', function() {
    over();
})

overlay.addEventListener('click', function() {
    over();
})