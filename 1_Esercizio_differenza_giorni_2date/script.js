function calcola() {
    const data1 = new Date(document.getElementById("data1").value);
    const data2 = new Date(document.getElementById("data2").value);

    // const diffTime = Math.abs(data2 - data1); // differenza in millisecondi tra le due date
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // conversione in giorni 1 giorno = 1000ms * 60secondi * 60minuti * 24ore
    // // alert("La differenza è di " + diffDays + " giorni.");

    const data1millisecondi = new Date(document.getElementById("data1").value);
    const data2millisecondi = new Date(document.getElementById("data2").value);
    if (data1millisecondi < data2millisecondi) {
        const differenza = data2millisecondi - data1millisecondi;
        console.log(differenza / (1000 * 60 * 60 * 24));
    }
}
