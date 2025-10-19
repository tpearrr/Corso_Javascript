/**
 * ESERCIZIO: Generare Card Dinamicamente
 * 
 * Obiettivo: Creare un array di oggetti contenenti dati per le card
 * e generare dinamicamente le card nel DOM utilizzando JavaScript
 */

// Array di oggetti che contiene i dati per ogni card
// Ogni oggetto rappresenta una card con: immagine, titolo e descrizione
const arr = [
    {
        immagine: "https://plus.unsplash.com/premium_photo-1760434189746-687f99c05ce8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        titolo: "Una card bellissima",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        immagine: "https://images.unsplash.com/photo-1760683347834-ef236b5468f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        titolo: "Una card 2 bellissima",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        immagine: "https://images.unsplash.com/photo-1760694121380-0dc12e8ac00f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
        titolo: "Una card 3 bellissima",
        descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]
// Cicla attraverso ogni elemento dell'array
// Per ogni oggetto nell'array, chiama la funzione createCard()
arr.forEach((data)=>{
    createCard(data); // NOTA: bisogna passare 'data' come parametro!
});

/**
 * Funzione per creare una singola card
 * @param {Object} data - L'oggetto contenente i dati della card (immagine, titolo, descrizione)
 */
function createCard(data){ // NOTA: la funzione deve accettare il parametro 'data'
    // 1. Creare il contenitore principale della card
    const card = document.createElement("div");
    card.className= "w-full md:w-1/2 xl:w-1/3 px-4" // Classi CSS per il layout responsive

    // 2. Creare il div interno per lo stile della card
    const innderDiv = document.createElement("div");
    innderDiv.className= "bg-white rounded-lg overflow-hidden mb-10 shadow-xl" // Stili per sfondo, bordi arrotondati e ombra

    // 3. Aggiungere il div interno al contenitore principale
    card.appendChild(innderDiv);

    // 4. Creare l'elemento immagine
    const immagine = document.createElement("img");
    immagine.src = data.immagine; // CORREZIONE: usare 'data.immagine' invece di 'data.url'
    immagine.alt = data.titolo; // Testo alternativo per accessibilità
    immagine.className= "w-full" // Larghezza al 100%
    innderDiv.appendChild(immagine); // Aggiungere l'immagine al div interno

    // 5. Creare il contenitore per il testo
    const textContainer = document.createElement("div");
    textContainer.className= "p-8 sm:p-9 md:p-7 xl:p-9 text-center" // Padding responsivo e testo centrato
    innderDiv.appendChild(textContainer); // Aggiungere al div interno

    // 6. Creare l'elemento titolo (h3)
    const titolo = document.createElement("h3");
    titolo.className= "font-semibold text-dark text-xl" // Stili per il titolo
    titolo.appendChild(document.createTextNode(data.titolo)); // Inserire il testo del titolo
    textContainer.appendChild(titolo); // Aggiungere al contenitore testo

    // 7. Creare l'elemento descrizione (p)
    const descrizione = document.createElement("p");
    descrizione.className= "text-base text-body-color leading-relaxed mb-7" // Stili per la descrizione
    descrizione.appendChild(document.createTextNode(data.descrizione)); // Inserire il testo della descrizione
    textContainer.appendChild(descrizione); // Aggiungere al contenitore testo

    // 8. Aggiungere la card completa al container nel DOM
    document.getElementById("container").appendChild(card);
}