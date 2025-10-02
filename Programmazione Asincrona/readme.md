Questo documento HTML dimostra il comportamento single-threaded (a thread singolo) di JavaScript e come un'operazione computazionalmente pesante possa bloccare il thread principale, rendendo l'interfaccia utente non responsiva.
La pagina contiene due pulsanti:

"Vai": avvia un'operazione pesante che simula un calcolo intensivo
"Alert": mostra un semplice messaggio di avviso
 Mentre il blocco di codice collegato al pulsante "Vai" è in esecuzione, non è possibile eseguire il codice collegato al pulsante "Alert", in quanto il singolo thread è occupato a terminare il calcolo complesso.