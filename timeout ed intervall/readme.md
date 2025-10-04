setTimeout e setInterval – Esempio pratico in JavaScript

Questo progetto dimostra l’utilizzo delle funzioni setTimeout() e setInterval() in JavaScript, mostrando un semplice orologio digitale che si aggiorna ogni secondo e può essere fermato con un clic su un pulsante.


La pagina HTML contiene:

Un pulsante per interrompere l’orologio;

Un paragrafo (<p>) dove viene visualizzato l’orario aggiornato in tempo reale.

Il codice JavaScript utilizza:

setInterval() per eseguire la funzione displayTime() ogni secondo;

clearInterval() per fermare l’intervallo quando l’utente preme il pulsante.


All’avvio, viene avviato un intervallo (setInterval) che:

Crea un nuovo oggetto Date();

Estrae l’ora corrente con toLocaleTimeString();

Aggiorna il contenuto del paragrafo <p id="demo"> con l’ora corrente.

Quando l’utente clicca sul pulsante “Vai”, l’intervallo viene annullato tramite clearInterval() e l’orologio si ferma.