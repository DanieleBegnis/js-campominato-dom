//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//seleziono la griglia
const mainGrid = document.querySelector('#grid');

//seleziono il pulsante
const mainButton = document.querySelector('#btn');
console.log(mainButton)
mainButton.addEventListener('click', function() {
    //coloro il bottone e lo spengo
    this.classList.toggle('blue');
    document.getElementById("btn").disabled = true;
    //creo la griglia facendo un ciclo 100 volte e appendendo alla griglia dei quadrati   
    for(let i = 1; i <= 100; i++) {
    const newSquare = generateSquare(i);
    mainGrid.append(newSquare);
}
});

//funzione che crea un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    //evento del colore sui quadrati
    newSquare.addEventListener('click', function() {
    this.classList.add('blue');
    alert(number);
    });

    return newSquare;
};

