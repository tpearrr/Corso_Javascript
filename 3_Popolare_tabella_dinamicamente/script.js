const data = [
    {
        id: 1,
        nome: "Mario",
        cognome: "Rossi",
        email: "mario.rossi@example.com",
        codicefiscale: "MRARSS80A01H501U",
        indirizzo: "Via Roma 1, Milano"
    },
    {
        id: 2,
        nome: "Luigi",
        cognome: "Verdi",
        email: "luigi.verdi@example.com",
        codicefiscale: "LGIVRD80A01H501U",
        indirizzo: "Via Milano 2, Roma"
    },
    {
        id: 3,
        nome: "Giovanni",
        cognome: "Bianchi",
        email: "giovanni.bianchi@example.com",
        codicefiscale: "GBNGNN80A01H501U",
        indirizzo: "Via Napoli 3, Torino"
    }
]



const table = document.getElementById("tabella");
const tbody = table.querySelector("tbody");

data.forEach(persona => {
    const row = document.createElement("tr");

    Object.keys(persona).forEach(key => {
        const column = document.createElement("td");
        const text = document.createTextNode(persona[key]);
        column.appendChild(text);
        row.appendChild(column);
    });

    tbody.appendChild(row);
});