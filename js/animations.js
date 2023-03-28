const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep(i,element,endNumber) {
    if (i <= endNumber) {
        if (i === 5000) {
            element.innerText = i + '+';
        }
        else{
            element.innerText = i;
        }
    }

    i += 100;
    setTimeout(function(){
        increaseNumberAnimationStep(i,element,endNumber)},INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncteaseNumberAnimation() {
    animationInited = true;
    const element = document.querySelector('.features__clients-count');
    increaseNumberAnimationStep(0,element,5000);
}
// dfasfsdfsd

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === "other") {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input');
 
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text";
 
    formContainer.appendChild(input);
    document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); 
    };

    let = otherInput = document.querySelector(".form__other-input");
    if (event.target.value !== "other" && Boolean(otherInput)) {
        document.querySelector("#form form").removeChild(otherInput)
    };
  });

function updateScroll() {
    if(window.scrollY > 0) {
        document.querySelector("header").classList.add("header__scrolled");
    }
    else{
        document.querySelector("header").classList.remove("header__scrolled");
    }

    let countElementPosition = document.querySelector(".features__clients-count").offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;

    if (windowBottomPosition >= countElementPosition && !animationInited){
        initIncteaseNumberAnimation();
    }
}
window.addEventListener("scroll", updateScroll);