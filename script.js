'use strict';

let secret_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
let flag = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when nothing entered
  if (!guess) {
    displayMessage('😕 No Number!');
  }

  //when guess is equal
  else if (guess === secret_number && flag == 0) {
    displayMessage('🎉😄 Correct Number!');
    document.querySelector('.number').textContent = secret_number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    flag = 1;
  }

  //when guess is wrong
  else if (guess !== secret_number && flag == 0) {
    if (score > 1) {
      displayMessage(guess > secret_number ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥲 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  flag = 0;
});
