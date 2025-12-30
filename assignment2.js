let billAmount = 100;
let tipPercentage = 0.10;

let tipAmount;
tipAmount = billAmount * tipPercentage;

let totalAmount;
totalAmount = billAmount + tipAmount;

console.log("Bill Amount: $"+billAmount.toFixed(2));
console.log("Tip Percentage: "+(tipPercentage * 100) + "%");
console.log("Tip Amount: $"+tipAmount.toFixed(2));
console.log("Total Amount: $"+totalAmount.toFixed(2));