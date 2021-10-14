'use strict';

let userOption;

const isNumber = function (num) {
  return !isNaN(parseInt(num)) && isFinite(num) && num !== null;
}

const game = function() {
  const randomNum = Math.round(Math.random() * 100);
  let attempts = 10;

  return function repeat() {

    if (attempts > 0) {

      let userNumber = prompt('Угадай число от 1 до 100:');

      if( isNumber(userNumber) ) {

        if( userNumber < randomNum ) {
          alert ('Загаданное число больше, осталось попыток: ' + --attempts)
          repeat()
        } else if ( userNumber > randomNum ) {
          alert ('Загаданное число меньше, осталось попыток: ' + --attempts)
          repeat()
        } else {
          userOption = confirm ('Поздравляю, Вы угадали!!! Хотите сыграть ещё?')
        }

      } else {
        if( userNumber === null ) {
          alert('Игра окончена')
          userOption = false

        } else {
          alert ('Введите число!')
          repeat ()
        }
        
      }
  
    } else {
      userOption = confirm ('Game over. Хотите сыграть ещё?')
    }

  }
}

  const rightNumber = function () {
    userOption = true
      return function startGame() {
        game()()
        if(userOption) {
          startGame()
        } else {
          alert('Вы вышли из игры успешно')
        }
      }
  }

  rightNumber()()