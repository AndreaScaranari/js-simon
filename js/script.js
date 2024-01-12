// * raccogliere elementi HTML
const timer = document.getElementById("timer");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");

// * dichiarazione variabili
const nums = [num1, num2, num3, num4, num5];
const userNums = [];
const timeoutTiming = 5000;

// * dichiarazione funzioni
// generare un numero casuale
const getRandomNumber = max => {
    const randomNumber = Math.floor(Math.random() * 100) +1;
    return randomNumber
}

// nascondere i numeri
const hideNumbers = () => {
for (let i = 0; i < nums.length; i++) {
    nums[i].classList.add("d-none");
}}

// generare i prompt
const createPrompt = () => {
    while (userNums.length < nums.length) {
    const userNum = parseInt(prompt("Indica un numero che ricordi"));
    if (userNum && !userNums.includes(userNum) && !isNaN(userNum)) {
        userNums.push(userNum);
    }}}

// * svolgimento
// genero 5 numeri casuali
for (let i = 0; i < nums.length; i++) {
    nums[i].innerText = getRandomNumber(100);
}

// nascondo i numeri dopo 30 secondi
const numbersTimeOut = setTimeout(() => {
    hideNumbers();
}, timeoutTiming);

// chiedo all'utente quali numeri si ricorda
const promptTimeOut = setTimeout(() => {
    createPrompt();
}, timeoutTiming+500);
