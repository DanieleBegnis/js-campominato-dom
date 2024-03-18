//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
//PARTE DUE
//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


//seleziono la griglia
const mainGrid = document.querySelector('#grid');
//creo array vuoto di numeri 'bomba'
const randomNumbersArray = [];
//seleziono il pulsante
const mainButton = document.querySelector('#btn');
console.log(mainButton)
mainButton.addEventListener('click', function() {
    //coloro il bottone e lo spengo
    this.classList.toggle('blue');
    document.getElementById("btn").disabled = true;
    //funzione che crea un array di numeri random
    function generateRandomArray(arrayLength, numMin, numMax) {
        // Creiamo un array vuoto
        while(randomNumbersArray.length < arrayLength) {
            // genero un numero random e controllo che non sia già stato inserito
            const randNumber = getRndInteger(numMin, numMax);
            if(!randomNumbersArray.includes(randNumber)) {
                randomNumbersArray.push(randNumber);
            }
        }
        return randomNumbersArray;
    }
    //creo e controllo array con bombe
    const bombsArray = generateRandomArray(16, 1, 100);
    console.log(bombsArray);
    //creo la griglia facendo un ciclo 100 volte e appendendo alla griglia dei quadrati   
    for(let i = 1; i <= 100; i++) {
    const newSquare = generateSquare(i);
    mainGrid.append(newSquare);
}

//funzione che crea un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    //evento del colore sui quadrati
    newSquare.addEventListener('click', function() {
    //this.classList.add('blue');
    //alert(number);
    if (this === bombsArray) {
        this.classList.add ('red')
    } else {
        this.classList.add ('blue')
    }
    });

    return newSquare;
};

});



//funzione che crea un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


