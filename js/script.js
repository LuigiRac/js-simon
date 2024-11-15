"use strict"
console.clear()

// 1. Generare numeri casuali
function randomNumbers() {

    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const casualNumber = Math.floor(Math.random() * 50) + 1;
        numbers.push(casualNumber);
    } return numbers
}

// crearmi la costante con i numeri generati dalla funzione
const casNum = randomNumbers();

// selezionato ul
const numbersList = document.getElementById("numbers-list");
// console.log(numbersList);
for (let i = 0; i < casNum.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = casNum[i];

    numbersList.appendChild(listItem);
}

// 2. Countdown
const countdown = document.getElementById("countdown");
let countdownTime = 5;

const answerForm = document.getElementById("answers-form");

const countdownInterval = setInterval(() => {
    countdownTime--;
    countdown.textContent = countdownTime;
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        // console.log(numbersList);

        numbersList.style.cssText = "display:none !important";

        answerForm.style.cssText = "display:block !important";
    };
}, 1000);


// 3. Validare i numeri
answerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputNumber = [];
    const inputElements = document.querySelectorAll("input");

    // console.log(inputElements);
    for (let i = 0; i < inputElements.length; i++) {
        const inputValue = parseInt(inputElements[i].value);
        // console.log(inputValue);

        inputNumber.push(inputValue);
    }

    let correctNumbers = [];
    let countCorrectNumbers = 0;

    for (let i = 0; i < inputNumber.length; i++) {
        if (casNum.includes(inputNumber[i])) {
            countCorrectNumbers++;
            correctNumbers.push(inputNumber[i]);



        }
        console.log(inputNumber[i]);
        // console.log(casNum);
        // console.log(inputNumber[i]);


    }
    if (countCorrectNumbers > 0) {
        const message = document.getElementById("message");
        message.textContent = "Hai indovinato" + " " + countCorrectNumbers + " numero/i:" + " " + correctNumbers;
    }
});


