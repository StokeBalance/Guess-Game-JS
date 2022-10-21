 let randomNumber = Math.floor(Math.random() *2) + 1;
const guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let score = document.querySelector('.score');
const inputField = document.querySelector('.inputField');
const submitGuess1 = document.querySelector('.submitGuess1');
const submitGuess2 = document.querySelector('.submitGuess2')
let guessCount = 1;
const resetButton = document.querySelector('.resetButton')
const goNext = document.querySelector('.goNext')
let stageCount = 1;
let points = 0;



function checkGuess() {

    const userInput = Number(inputField.value);
    
    if (userInput === randomNumber) {
        points += 5;
        lastResult.textContent = 'Congratulations, you got it right!';            
        lastResult.style.backgroundColor = 'green';
        score.textContent = 'Points:' + points;
        inputField.disabled = true;
        goNext.style.display = 'block';
        goNext.textContent = 'Next Stage'
        goNext.addEventListener('click', nextGame);
    } else {
        lastResult.textContent = '!!!Oops, You got it worng. Start again!!!!'
    lastResult.style.color = 'red';
    score.textContent = 'Points: ' + points;
    setGameOver();
}
    inputField.value = '';
    inputField.focus();

}

submitGuess1.addEventListener('click', checkGuess);

function nextGame() {
    stageCount++;
    randomNumber++;
    goNext.style.display = 'none'
    lastResult.textContent = '';
    inputField.disabled = false;
    submitGuess1.style.display = 'none';
    submitGuess2.style.display = 'block';


    const userInput = Number(inputField.value);

    if (stageCount > 4) {
        resetGame();
    } 
   
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
        score.textContent = 'Points: ' + points;
    } 
    guesses.textContent += ' ' + userInput + ' ';

    if (userInput === randomNumber) {
        points += 5;
        lastResult.textContent = 'Congratulations, you got it right!';            
        lastResult.style.Color = 'green';
        score = 'Points:' + '' + points;
        inputField.disabled = true;
        goNext.style.display = 'block'
        goNext.addEventListener('click', nextGame);
     } else if (guessCount === 2){
        lastResult.textContent = 'Wrong!';
        lastResult.style.color = 'red';

     }else if (guessCount === 3) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lastResult.style.color = 'red';
        score.textContent = 'Points: ' + points;
        setGameOver();
    }

    guessCount++;
    inputField.value = '';
    inputField.focus();
}

submitGuess2.addEventListener('click', nextGame)

function setGameOver() {
    inputField.disabled = true;
    submitGuess1.disabled = true;
    submitGuess2.disabled = true;
    resetButton.style.display = 'block';
    resetButton.textContent = 'Start new game';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  
    location.reload();
}
