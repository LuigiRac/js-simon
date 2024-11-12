"use strict"
console.clear()

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