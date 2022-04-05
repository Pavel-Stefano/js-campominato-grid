    
   
       
         // 1) prendo l'input del livello di gioco dall'utente --> al click del bottone setto la difficoltà
        //  2) a seconda del livello selezionato definisco quanti quadratini devo creare (variabile)
        //  3) creare la griglia di dimenzioni selezionate (funzione)
        //  4) nelle celle impostare altezze e grandezze

        // function setLevel() {
        //function setLevel(event) {
            // console.log(this);
            // il this è l'oggetto che ha l'evento
            // console.log(event);

            // event.preventDefault();
            // nel form 
            // sospende l'azione di default del bottone 
            // se era un link non andrà alla pagina 

            // 1) setto il livello avvio il gioco
            // const select = document.getElementById('select').value;
            // console.log(select);
            // stringhe

            // 2) variabile quadratini
            // let numSquare;
            // switch(select){
            //     case 'Easy':
            //     default:
            //         numSquare = 100;
            //     break;
            //     case 'Hard':
            //         numSquare = 81;
            //     break;
            //     case 'Crazy':
            //         numSquare = 49;
            //     break;
            // }
            // 3.4 creare quante celle per riga
        //     let squareperSide = Math.sqrt(numSquare);
        //     console.log(squareperSide);
        //     generateBomb(numSquare)
        //     generaGriglia(numSquare);

        // }
        // function generateBomb(numSquare){
        //     max_attempt = 

        // }

        // 3.1) funzione per generare quadratini
        // function generaGriglia(numSquare, squareperSide){
        //     console.log(numSquare);
            // // 3.2 prendo il container - creo le row - 
            // const mainContainer = document.getElementById("main-container");
            // mainContainer.innerHTML='';
            // let row = document.createElement("div");
            // row.setAttribute("class", "gridRow");
            // 3.3 creo le celle con un ciclo for
        //     for (let i = 1; i <= numSquare; i++) {
        //         const square = generaCella(i, squareperSide);
        //         row.append(square);
        //     }
            
        //     mainContainer.append(row);          
        // }
       


        //     // 4) funzione per generare celle
        // function generaCella(numSquare, squareperSide) {
        //     let square = document.createElement("div");
        //     square.setAttribute("class", "box");
        //     square.style.width = `calc(100% / ${squareperSide})`;
        //     square.style.height = `calc(100% / ${squareperSide})`;
        //     square.classList.add("pointer");
        //     square.innerHTML = `<span>${numSquare}</span>`;
        //     square.addEventListener("click", coloraCella);
        //     return square;
        // }
        // function coloraCella() {
        //     //  2. 3)
        //     let num = parseInt(this.innerText);
        //     attemps++;
        //     if(bombs.includes(num)){
        //         this.style.backgroundColor = 'red';
        //         this.innerHTML = `<img src=""`
        //     }
        //     else {
        //         this.style.backgroundColor = "#6495ed";
        //     }
            
        //     this.classList.remove("pointer");
        //     this.removeEventListener("click", coloraCella);
        // }

        // document.getElementById('play').addEventListener('click', setLevel);
        
        // // evento alternativo 
        // // document.getElementById('select').addEventListener('change', setLevel)



        // // 2. 1) creo un array con numeri random * 16 volte e confrontare se la bomba è nella casella selezionata
        // // nell array non devono esserci duplicati
        // // funzione che genera numeri casuali

        // // fuction numeri random(){}

        // // function game over



        // const BOMB_NUMER = 16;
        // const bombs = [];
        // let max_attempt;
        // let attemps;

        // // funzione che genera le bombe 
        

        // while(bombs.length < BOMB_NUMER) {
        //     let bombNumber = getRandomInt(1, max);
        //     if(!bombs.includes(bombNumber)){
        //         bombs.push(bombNumber)
        //     }
        // }
        // console.log(bombs);

        //  1) prendo l'input del livello di gioco dall'utente --> al click del bottone setto la difficoltà
        //  2) a seconda del livello selezionato definisco quanti quadratini devo creare (variabile)
        //  3) creare la griglia di dimenzioni selezionate (funzione)
        //  4) nelle celle impostare altezze e grandezze

// Utility
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
//   variabili globali indispensabili per la lettura in tutti gli ambiti(scope)
const BOMB_NUMBER = 16;
const bombs = [];
let max_attempt;
let attempts = 0;


// prendo il bottone per l'avvio del gioco e setto le caselle per difficoltà
document.getElementById("play").addEventListener("click", setLevel);

// setto per difficoltà
function setLevel(event){
const level = document.getElementById("select").value;
  console.log("livello selezionato: ", level);
  let numSquare;
  switch (level) {
    case "1":
    default:
      numSquare = 100;
      break;
    case "2":
      numSquare = 81;
      break;
    case "3":
      numSquare = 49;
      break;
    }
//   definisco le caselle per riga in base alla difficoltò
let squareperSide = Math.sqrt(numSquare);
  console.log("celle per lato: ", squareperSide);
//   chiamo ad eseguire funzioni che generano le bombe e griglia
generateBomb(numSquare);
generaGriglia(numSquare, squareperSide);
}

// funzione crea bombe
function generateBomb(numSquare) {
    max_attempt = numSquare - BOMB_NUMBER;
    while (bombs.length < BOMB_NUMBER) {
      let bombNUmber = getRandomInt(1, numSquare);
      if (!bombs.includes(bombNUmber)) {
        bombs.push(bombNUmber);
      }
    }
  }
// funzione crea griglia
function generaGriglia(numSquare, squareperSide) {
    console.log("numero di celle totali: ", numSquare);
    const app = document.getElementById("main-container");
    app.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute("class", "gridrow");
    for (let i = 1; i <= numSquare; i++) {
      const square = generaCella(i, squareperSide);
      row.append(square);
    }
    app.append(row);
  }
//   funzione che crea ogni singola cella
function generaCella(numSquare, squareperSide) {
    let square = document.createElement("div");
    square.setAttribute("class", "box");
    square.style.width = `calc(100% / ${squareperSide})`;
    square.style.height = `calc(100% / ${squareperSide})`;
    square.classList.add("pointer");
    square.innerHTML = `<span>${numSquare}</span>`;
    square.addEventListener("click", coloraCella);
    return square;
  }
//   funzione per colorare e interagire con ogni singola cella
function coloraCella() {
    //console.log(this.innerText);
    let num = parseInt(this.innerText);
    attempts++;
    if (bombs.includes(num)) {
      this.style.backgroundColor = "red";
      this.innerHTML = `<img src="src/img/bomb.png">`;
      gameOver();
    } else {
      this.style.backgroundColor = "#6495ed";
    }
    this.classList.remove("pointer");
    this.removeEventListener("click", coloraCella);
  }
//   funzione per terminare la partita
function gameOver() {}
document.getElementById("play").addEventListener("click", setLevel);
