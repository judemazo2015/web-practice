/*
Name: MAZO, YVONNIE JUDE, ALA
Section: BSIT - 1A
Title: Lab Activity 3
*/

let principal = Number(prompt("Enter principal: "));
let rate = Number(prompt("Enter rate (%): "));
let time = Number(prompt("Enter time (years): "));

console.log("Simple Interest = "+calculateSimpleInterest(principal, rate, time));

function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}