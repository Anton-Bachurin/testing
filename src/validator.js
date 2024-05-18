const iconsNumber = 7;
const validator = document.getElementById('validator');
const icons = document.getElementById('icons');
const iconsImages = ['visa', 'mastercard', 'amExp', 'discover', 'jcb', 'diners', 'mir'];

if (validator) {
    for (let i = 0; i < iconsNumber; i++) {
        const icon = document.createElement('div');
        icon.classList.add('icon', iconsImages[i]);
        icons.appendChild(icon);
    }
}

const visa = document.querySelector('.visa');
const mastercard = document.querySelector('.mastercard');
const amExp = document.querySelector('.amExp');
const discover = document.querySelector('.discover');
const jcb = document.querySelector('.jcb');
const diners = document.querySelector('.diners');
const mir = document.querySelector('.mir');

const result = document.getElementById('result');
const button = document.getElementById('validate-btn');

let valid = false;

function isValid(num) {
    let sum = 0; 
    const numReverse = String(num).split('').reverse();
    const numChanged = numReverse.map((el, idx) => 
                                      (idx % 2 !== 0) 
                                      ? +el * 2 
                                      : +el);

    const isDoubled = numChanged.map((el) => 
                                  el > 9
                                  ? el - 9
                                  : el);

    const numNum = isDoubled.reverse().join('').split('').map(Number);
    
    for(let i = 0; i < numNum.length; i++) {
      sum +=numNum[i];
    }

    const sumString = String(sum);

  if (sumString[sumString.length - 1] === '0') {
    valid = true;
  } else {
    valid = false;
  }   
  return valid;
}

function chooseCard(num) {
    const numStr = String(num);

    if (numStr[0] === '4') {  
        visa.classList.add('iconActive');
        }
     else {
        visa.classList.remove('iconActive');
    } 

    if (/^5[1-5]|^2{3}1\d{2}|^2[2-6][2-9]\d{3}|^270\d{3}|^271\d{3}|^2720\d{2}/.test(num)) {      
        mastercard.classList.add('iconActive');
    } else {
        mastercard.classList.remove('iconActive');
    } 

    if (/^3[47]/.test(num)) {
            amExp.classList.add('iconActive');        
        }
    else {
        amExp.classList.remove('iconActive');
    } 

    if (/^6011|^65|^64[4-9]|^62212[6-9]|^6221[3-9]\d|^622[2-8]\d{2}|^6229[01]\d|^62292[0-5]/.test(num)) {
        discover.classList.add('iconActive');    
    } else {
        discover.classList.remove('iconActive');
    }

    if (/^352[89]|^35[3-8]\d/.test(num)) {
        jcb.classList.add('iconActive');
    } else {
        jcb.classList.remove('iconActive');
    }

    if (/^36|^54|^30[0-5]/.test(num)) {
        diners.classList.add('iconActive');
    } else {
        diners.classList.remove('iconActive');
    }

    if (/^220[0-4]/.test(num)) {
        mir.classList.add('iconActive');
    } else {
        mir.classList.remove('iconActive');
    }
}

button.onclick = () => {
    const input = Number(document.getElementById('validate-cell').value);
    isValid(input);
    chooseCard(input);
    
    if (input === 0) {
        result.innerHTML = 'Введите номер карты';
    } else if (valid) {
        result.innerHTML = 'Карта действительна';
    } else {
        result.innerHTML = 'Неправильный номер карты';
    }
    return false;
};



