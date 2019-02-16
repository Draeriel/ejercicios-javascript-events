let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let thirdNumber = document.getElementById('thirdNumber');
let winnerNumber = document.getElementById('winnerNumber');
let generatedNumbers = [];

window.onload = function() {
    this.generatedNumbers = [this.firstNumber, this.secondNumber, this.thirdNumber];
}

function generateNumbers() {
    this.generatedNumbers.map( number => {
        number.innerHTML = Math.floor((Math.random() * 99) + 1);
        number.style.color = 'blue';
    });
    this.resetRaffle();
}

function resetRaffle() {
    this.winnerNumber.innerHTML = '';
    document.getElementById('raffleButton').removeAttribute('disabled');
}

function goodLuck() {
    document.getElementById('raffleButton').setAttribute('disabled', 'disabled');
    this.winnerNumber.innerHTML = Math.floor((Math.random() * 99) + 1);
    this.generatedNumbers.map( number => {
        if (number.innerHTML === this.winnerNumber.innerHTML) {
            number.style.color = 'green';
        } else {
            number.style.color = 'red';
        }
    })
}