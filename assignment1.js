let secretNumber = 7;
let userGuess = 10;

if (userGuess == secretNumber) {
    console.log("You guessed it! The number is 7.");
}
else if (userGuess > secretNumber) {
    console.log("Too high! Try a smaller number.");
}
else{
    console.log("Too low! Try a bigger number.");
}