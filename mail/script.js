// Richiedo all'utente di inserire il proprio indirizzo email
let userMail = prompt("scrivi il tuo indirizzo email");

// Creo un array contenente gli indirizzi email dei destinatari autorizzati
const emailArr = ["mail@prova.com", "prova@mail.com", "myname@email.com"];

// Recupero l'elemento HTML in cui verrà stampato il risultato
let answer = document.getElementById("answer");

// Inizializzo la variabile "right" con un messaggio di default in caso di indirizzo email non corretto
var right = "Spiacenti, l'indirizzo email non corrisponde a nessun utente.";

// Itera attraverso gli elementi dell'array "emailArr" per verificare se l'indirizzo email inserito dall'utente è presente nell'elenco
for (let i = 0; i < emailArr.length; i++) {
    if (userMail === emailArr[i]) {
        // Se l'indirizzo email è presente nell'array, aggiorna la variabile "right" con un messaggio di successo
        right = "L'indirizzo email è corretto.";
    }
}

// Aggiorno il contenuto dell'elemento HTML con il valore della variabile "right"
answer.innerHTML = right;
