let numbers = [1,2,3,4,5,6,7,8,9,10];

let doubled = numbers.map(n => n*2);
alert(doubled);

let greaterThan5 = numbers.filter(n => n>5);
alert(greaterThan5);

let divisibleBy3 = numbers.find(n => n%3===0);
alert(divisibleBy3);