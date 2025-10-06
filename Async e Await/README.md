# Async e Await - Tutorial JavaScript

Un progetto educativo per comprendere i concetti di programmazione asincrona in JavaScript utilizzando `async` e `await`.

## Descrizione

Questo progetto dimostra l'uso di `async` e `await` in JavaScript, confrontando l'approccio tradizionale con le Promise e il moderno approccio async/await. Il codice include esempi pratici di:

- Funzioni asincrone di base
- Gestione delle Promise con async/await
- Operazioni di fetch con entrambi gli approcci
- Gestione degli errori con try/catch

## Obiettivi di Apprendimento

- Comprendere la differenza tra Promise e async/await
- Imparare a scrivere codice asincrono più leggibile
- Gestire operazioni di fetch in modo moderno
- Implementare una corretta gestione degli errori

## Struttura del Progetto

```
├── index.html          # File principale con esempi di codice
├── pizza.jpg           # Immagine di esempio per il fetch
└── README.md           # Documentazione del progetto
```


## Concetti Principali

### Funzioni Async

```javascript
// Dichiarazione di funzione asincrona
async function hello() {
    return "hello";
}

// Arrow function asincrona
let prova = async () => { return "ciao" }
```

### Await e Promise

```javascript
async function hello2() {
    return greeting = await Promise.resolve("hello async and await");
}
```

### Fetch con Promise (Approccio Tradizionale)

Il codice mostra l'approccio tradizionale con `.then()` e `.catch()` per gestire le operazioni asincrone.

### Fetch con Async/Await (Approccio Moderno)

```javascript
async function myFetch() {
    try {
        let response = await fetch('pizza.jpg');
        let myBlob = await response.blob();
        
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    } catch(e) {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    }
}
```

## Vantaggi di Async/Await

1. **Leggibilità**: Il codice appare più lineare e facile da leggere
2. **Debugging**: Più semplice fare debug rispetto alle Promise chain
3. **Gestione errori**: Try/catch più intuitivo rispetto a .catch()
4. **Manutenibilità**: Codice più facile da mantenere e modificare