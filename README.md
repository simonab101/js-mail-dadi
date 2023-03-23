Mail e Dadi
===

## Consegna Mail 

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
## Step da seguire: 
1. Si richiede all'utente di inserire un input tramite una funzione appropriata (come prompt()).
2. Si crea un array contenente una serie di valori validi utili per la verifica dell'input.
3. Si seleziona un elemento HTML utilizzando un metodo come document.getElementById().
4. Si assegna un valore predefinito alla proprietà innerHTML dell'elemento selezionato.
5. Si esegue un ciclo for per scorrere l'array contenente i valori validi.
6. Per ogni valore nell'array si verifica se l'input dell'utente corrisponde.
7. Se l'input corrisponde ad uno dei valori validi, si assegna un valore appropriato ad una variabile.
8. Si aggiorna la proprietà innerHTML dell'elemento selezionato con il valore della variabile, se l'input è valido. Altrimenti, la proprietà rimane invariata.


## Consegna gioco dei Dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
## Step da seguire: 
1. Generare un numero casuale compreso in un intervallo specificato utilizzando il metodo appropriato (ad esempio Math.random() e Math.floor()).
2. Assegnare il valore del numero generato ad una variabile.
3. Eseguire una serie di istruzioni if per confrontare le variabili contenenti i numeri generati.
4. In base al risultato dei confronti, generare un messaggio appropriato per l'utente.
5. Aggiungere il messaggio all'elemento HTML desiderato utilizzando la proprietà innerHTML.
