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

const input = Number(document.getElementById('validate-cell').value);
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
  }   
  return valid;
}

button.onclick = () => {
    isValid(input);

    if (input === 0) {
        result.innerHTML = 'Введите номер карты';
    } else if (valid) {
        result.innerHTML = 'Карта действительна';
    } else {
        result.innerHTML = 'Неправильный номер карты';
    }
    return false;
};



