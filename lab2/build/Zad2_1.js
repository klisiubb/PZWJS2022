"use strict";
//ZAD2_1
//Za pomocą liczników wykonaj zdarzenie wyświetlania czasu, który upłynął od startu aplikacji, co 1 sekundę
let time = 0;
const printTime = () => {
    console.log(`Od startu aplikacji upłynęło ${time} sekund.`);
    time += 1;
};
let start = setInterval(printTime, 1000);
