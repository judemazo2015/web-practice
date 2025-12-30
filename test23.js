let counter = 0;

let timer = setInterval(() =>{
    counter++;
    alert(counter);

    if (counter===5) {
        alert("Half way there!");
    }
    if (counter===10){
        alert("Done!");
        clearInterval(timer);
    }
}, 1000
);