"use strict"
console.clear()

function randomNumbers() {

    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const casualNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(casualNumber);
    } return numbers
} console.log(randomNumbers());