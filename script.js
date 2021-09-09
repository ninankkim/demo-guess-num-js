'use strict';

//CODE


// we created a variable called number where it will generate a number from 1-20
// () * 20 is the same thing as 1 * 20, and +1, so we don't get a 0 number
// the math.trunc returns the integer part and removes any decimals 
// and the math.random will return any randomize number from the formula 
// the document.querySelector is then getting the class from html to trigger the number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '👺 No Number';

        // when player guesses correct number
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🙌 Correct Number';
        // we put this here because the number cannot be revealed until the user inputs the correct number
        document.querySelector('.number').textContent = secretNumber;


        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //this checks for score and high score
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '👆 Too High' : '👇 Too Low';
            score = score - 1
            // or score-- (it works the same)
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🙀 You Lost!';
            document.querySelector('.score').textContent = 0;
        }

        // } else if (guess > secretNumber) {

        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '👇 Too High';
        //         score = score - 1
        //         // or score-- (it works the same)
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '🙀 You Lost!';
        //         document.querySelector('.score').textContent = 0;
        //     }


        //     // when guess is too low 
        // } else if (guess < secretNumber) {

        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '👇 Too Low';
        //         score = score - 1
        //         // or score-- (it works the same)
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '🙀 You Lost!';
        //         document.querySelector('.score').textContent = 0;
        //     }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});