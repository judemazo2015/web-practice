/*
Name: MAZO, YVONNIE JUDE, ALA
Section: BSIT - 1A
Title: Lab Activity 2
*/
const PI = 3.14159;
let radius = Number(prompt("Enter radius: "));

console.log("Circumference = "+calculateCircumference(radius).toFixed(2));
console.log("Area = "+calculateArea(radius).toFixed(2));

function calculateCircumference(radius) {
    return 2 * PI * radius
}

function calculateArea(radius) {
    return PI * (radius * radius)
}