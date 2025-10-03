# Esempi di JavaScript Sincrono e Asincrono

Questo progetto contiene un semplice file HTML con esempi di **gestione della sincronia e asincronia in JavaScript**.  
Vengono mostrati diversi approcci, dal codice sincrono con `alert()`, fino all’uso moderno di `fetch` con le **Promise**.

---

## Contenuto del progetto
- `index.html` → Pagina HTML con pulsante e script JavaScript dimostrativo.
- `classe.json` → File JSON usato come esempio per le chiamate `fetch` (deve essere presente nella stessa directory).

---

## Concetti trattati
1. **Codice sincrono**  
   - Uso di `alert()` e manipolazione del DOM.
   - Esempio: creazione di un `<p>` dopo il click su un pulsante.

2. **Codice asincrono con `fetch`**  
   - Richiesta di risorse esterne (immagini, JSON).
   - Differenza tra `Promise <pending>` e risultato risolto.

3. **Gestione asincrona con callback (`XMLHttpRequest`)**  
   - Vecchio approccio per caricare asset tramite `XHR`.
   - Uso di callback per mostrare un’immagine caricata.

4. **Uso moderno di `fetch` + `then` + `catch`**  
   - Richiesta di un file JSON.
   - Catena di `.then()` per elaborare i dati.
   - Gestione errori con `.catch()`.

---

## Esecuzione
1. Scarica o clona la repository.
2. Assicurati che nella stessa cartella sia presente il file `classe.json`.
3. Apri `index.html` con un browser moderno (Chrome, Firefox, Edge).
4. Apri la **console** del browser (`F12` → Console) per vedere i log dei dati e degli errori.

---

## Tecnologie usate
- **HTML5**
- **JavaScript ES6+**
- `fetch` API per le chiamate HTTP
- `XMLHttpRequest` (solo a scopo didattico)

---

## Note
- Il codice contiene diverse sezioni commentate: puoi attivarle/rimuoverle per provare i vari approcci.
- L’uso di `fetch` è preferibile a `XMLHttpRequest` in progetti moderni.
- Le Promise permettono una gestione più chiara e leggibile delle operazioni asincrone.

---

Esempio didattico per dimostrare la differenza tra codice **sincrono** e **asincrono** in JavaScript.
