Le Promise in JavaScript

Concetti chiave:

-Promise: oggetti che rappresentano il completamento (o fallimento) di un’operazione asincrona.
-then(): definisce cosa fare quando la Promise viene risolta.
-catch(): gestisce eventuali errori.
-fetch(): API per effettuare richieste HTTP asincrone.
-setTimeout(): permette di eseguire una funzione dopo un determinato intervallo di tempo.

Questo progetto è un esempio pratico che mostra l’utilizzo delle Promise in JavaScript per gestire operazioni asincrone in modo più leggibile e strutturato rispetto ai callback annidati.

Il file HTML contiene diversi esempi di codice che illustrano:

1) Gestione asincrona con callback
Mostra come venivano gestite le operazioni asincrone prima dell’introduzione delle Promise. Come si può notare, il codice diventa difficile da leggere e mantenere a causa del cosiddetto “callback hell”.

2) Gestione asincrona con Promise
Il codice successivo dimostra come le Promise semplifichino la gestione delle operazioni asincrone, migliorando la leggibilità.

3) Esempio con fetch()
L’esempio mostra come usare fetch() per recuperare un file (in questo caso un’immagine pizza.jpg) e visualizzarlo nel documento.

4) Creazione manuale di una Promise con setTimeout()
Viene creata una funzione timeoutPromise() che restituisce una Promise, risolta dopo un intervallo di tempo specificato.