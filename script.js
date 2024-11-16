const wrapper = document.querySelector('.wrapper');
function activeSignUp() {
    wrapper.classList.add('activeSignUp');
    wrapper.classList.remove('activeSignIn');
}
function activeSignIn() {
    wrapper.classList.add('activeSignIn');
    wrapper.classList.remove('activeSignUp');
} 
function changeColor(color) {
    const bgAnimate = document.getElementById("bg-animate");
    const curved = document.getElementById("curved");
    bgAnimate.style.background = color;
    curved.style.background = color;
    bgAnimate.classList.add('active');
    setTimeout(function () {
        bgAnimate.classList.remove('active');
    }, 1200)
}
const color = document.querySelectorAll('.color');
function activeLink() {
    color.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
color.forEach((item) => item.addEventListener('click', activeLink));