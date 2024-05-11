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

    if (numStr[0] === '4' && numStr.length >= 13 && numStr.length <= 19) {  
        visa.classList.add('iconActive');
        }
     else {
        visa.classList.remove('iconActive');
    } 

    if (/^51|52|53|54|55|[222100-272099]/.test(num) && numStr.length === 16) {      
        mastercard.classList.add('iconActive');
    } else {
        mastercard.classList.remove('iconActive');
    } 

    if (/^34|37/.test(num) && numStr.length === 15) {
            amExp.classList.add('iconActive');        
        }
    else {
        amExp.classList.remove('iconActive');
    } 

    if (/^6011|[622126-622925]|644|645|646|647|648|649|65/.test(num) && numStr.length >= 16 && numStr.length <=19) {  
        discover.classList.add('iconActive');    
    } else {
        discover.classList.remove('iconActive');
    }

    if (/^35[28-89]/.test(num) && numStr.length >= 16 && numStr.length <=19) {
        jcb.classList.add('iconActive');
    } else {
        jcb.classList.remove('iconActive');
    }

    if (/^[300-305]|36|54/.test(num) && (numStr.length === 14 || numStr.length === 16)) {
        diners.classList.add('iconActive');
    } else {
        diners.classList.remove('iconActive');
    }

    if (/^[2200-2204]/.test(num) && numStr.length >= 16 && numStr.length <= 19) {
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



