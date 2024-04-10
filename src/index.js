import './style.css';

const iconsNumber = 7;
const validator = document.getElementById('validator');
const icons = document.getElementById('icons');
const iconsImages = ['visa', 'mastercard', 'amExp', 'discover', 'jcb', 'diners', 'mir']

if (validator) {
    for (let i = 0; i < iconsNumber; i++) {
        const icon = document.createElement('div');
        icon.classList.add('icon', iconsImages[i]);
        icons.appendChild(icon);
    }
}

const input = document.getElementById('validate-cell').value;
const result = document.getElementById('result');
const button = document.getElementById('validate-btn');

if (input.length < 1) {
    result.innerHTML = 'Введите номер карты';
};

function isValid(num) {
    const numReverse = num.split('').reverse();
    for (let i = 0; i < numReverse.length; i++) {
        if (numReverse[i] % 2 !== 1) {
            numReverse[i] *= 2;
        }
    }
}

button.onclick = () => {
    result.innerHTML = 'y645';  // это пока просто заглушка
    return false;
};



