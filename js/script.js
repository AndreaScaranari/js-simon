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
const randomNumbers = [];
const timeoutTiming = 3000;
const correctNumbers = [];
let message;

// * dichiarazione funzioni
// generare un numero casuale unico
const getRandomNumber = max => {
    const randomNumber = Math.floor(Math.random() * max) +1;
        if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);

    console.log(randomNumber);
    return randomNumber
}}

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

// comparare i numeri ricordati a quelli generati
const compareNumbers = () => {
    for (let i = 0; i < nums.length; i++) {
        if (userNums.includes(parseInt(nums[i].innerText)))
            correctNumbers.push(nums[i].innerText);}}

// generare il messaggio con il quantitativo di numeri ricordati correttamente (if any)
const createMessage = () => {
    if (correctNumbers.length === 0) {
        message = "Nessuno dei numeri inseriti era corretto!"
    } else if (correctNumbers.length === 1) {
        message = "Il numero corretto che ti sei ricordato è: "
    } else {
        message = "I numeri corretti che ti sei ricordato sono: "
    }
    message += correctNumbers;
    console.log(message);
    alert(message);
}

// * svolgimento
// genero 5 numeri casuali
while (randomNumbers.length < nums.length) {
getRandomNumber(6);
}

// assegno ai div html i valori generati casualmente 
for (let i = 0; i < randomNumbers.length; i++) {
    nums[i].innerText = randomNumbers[i];
}

// nascondo i numeri dopo 30 secondi
const numbersTimeOut = setTimeout(() => {
    hideNumbers();
}, timeoutTiming);

// chiedo all'utente quali numeri si ricorda
const promptTimeOut = setTimeout(() => {
    createPrompt();

// verifico quali numeri si è ricordato correttamente
    compareNumbers();
    
// invio il messaggio dell'esito
    createMessage();
}, timeoutTiming+500);

