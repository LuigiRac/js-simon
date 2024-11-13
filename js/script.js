"use strict"
console.clear()

// 1. Generare numeri casuali
function randomNumbers() {

    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const casualNumber = Math.floor(Math.random() * 100) + 1;
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

});


