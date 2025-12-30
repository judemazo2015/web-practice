/*
Name: MAZO, YVONNIE JUDE, ALA
Section: BSIT - 1A
Title: Lab Activity 1
*/

let length = Number(prompt("Enter the length: "));
let width = Number(prompt("Enter the width: "));
console.log("Area = : "+calculateArea(length, width));
console.log("Perimeter = : "+calculatePerimeter(length, width));

function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return (length * 2) + (width * 2);
}