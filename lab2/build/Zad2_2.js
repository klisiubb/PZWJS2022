"use strict";
//ZAD2_2
//Co jedną sekundę wyświetl pięć razy literę ‘a’ w odstępach 10 ms
let i = 0;
let printA = () => {
    if (i == 5) {
        return;
    }
    console.log("A");
    i++;
};
let x = setInterval(() => {
    setInterval(printA, 100);
    i = 0;
}, 1000);
