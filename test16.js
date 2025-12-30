let car = {
    brand: "Toyota",
    model: "Avanza",
    year: 2020
};

alert(car.brand);
alert(car["model"]);
alert(car.year);

car.year = 2022;
car.color = "blue";
alert(car.color);