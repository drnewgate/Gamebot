'use strict';

let randomNum = parseInt(Math.random() * 100);  //замкнутая переменная

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessNum(serNum) {
    
function guess() {
  let userNum = prompt('Угадай число от 1 до 100', ''); 

  if (userNum === null) {
    alert(`Игра окончена`);
    } 

  if (isNaN(userNum)) {
    alert('Введи число!');
  return guess(userNum)
    }

  if (userNum === null) {
  return
    }

  if (!isNum(userNum)) {
    userNum = +userNum;
    }

  else if (userNum > randomNum) {
    alert('Загаданное число меньше');
  return guess(userNum)
    } 

  else if (userNum < randomNum) {
    alert('Загаданное число больше');
  return guess(userNum)
  }

  else if (userNum !== Number) {               
    alert('Поздравляю, Вы угадали!!!');
  return
  }
     
}
  guess()
}
guessNum();
console.log(randomNum);