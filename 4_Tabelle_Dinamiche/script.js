class Tabella {
  nomiColonne;
  data;

  constructor(nomiColonne, data) {
    this.nomiColonne = nomiColonne;
    this.data = data;
    this.generaTabella(); // Genera automaticamente la tabella al momento della creazione
  }

  generaTabella() {
    const tabella = document.createElement("table"); // Crea l'elemento HTML table
    tabella.appendChild(this.generaColonne());
    tabella.appendChild(this.generaRighe());
    document.querySelector("body").appendChild(tabella); // Inserisce la tabella nel DOM
  }

  generaColonne() {
    const thead = document.createElement("thead");
    this.nomiColonne.forEach((nomeColonna) => { // Itera sui nomi delle colonne
      const th = document.createElement("th");
      const text = document.createTextNode(nomeColonna);
      th.appendChild(text);
      thead.appendChild(th);
    });
    return thead;
  }
  generaRighe() {
    const tbody = document.createElement("tbody");
    this.data.forEach((riga) => { // Itera su ogni oggetto dati
      const tr = document.createElement("tr");
      Object.keys(riga).forEach((key) => { // Estrae dinamicamente le proprietà dell'oggetto
        const cella = document.createElement("td");
        const text = document.createTextNode(riga[key]);
        cella.appendChild(text);
        tr.appendChild(cella);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
}

// Definizione dei nomi delle colonne
const nomiColonne1 = [
  "id",
  "nome",
  "cognome",
  "email",
  "codiceFiscale", // Corretto per mantenere coerenza con gli oggetti dati
  "indirizzo",
];

// Dati di esempio per popolare la tabella
const data1 = [
  {
    id: 1,
    nome: "luca",
    cognome: "rossi",
    email: "lucarossi@gmaail.it",
    codiceFiscale: "kdrwde32f93x109m",
    indirizzo: "via torino",
  },
  {
    id: 2, // Corretto l'id per differenziare le righe
    nome: "marco",
    cognome: "bianchi",
    email: "marcobianchi@gmail.it",
    codiceFiscale: "mbncmrc85d15f205y",
    indirizzo: "via milano",
  },
  {
    id: 3,
    nome: "anna",
    cognome: "verdi",
    email: "annaverdi@gmail.it",
    codiceFiscale: "vrdnna90a41h501z",
    indirizzo: "via roma",
  },
  {
    id: 4,
    nome: "giulia",
    cognome: "neri",
    email: "giulianeri@gmail.it",
    codiceFiscale: "nreglu88l44f839w",
    indirizzo: "via napoli",
  },
];

// Creazione dell'istanza della tabella - questo genera automaticamente la tabella nel DOM
const tabella1 = new Tabella(nomiColonne1, data1);
