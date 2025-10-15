let arr = [];
// versione esotica
// for (let i = Math.floor(Math.random() * 20); i < 20; i++) {
//     let randomNum = Math.floor(Math.random() * 100) + 1;
//     arr.push(randomNum);
// }
const numeroElementi = 10
const max = 100
for (let i = 0; i < numeroElementi; i++) {
    arr.push(Math.floor(Math.random() * max))
}
console.log(arr);
let pari = 0;
let dispari = 0;
arr.forEach((num) => {
    // if (num % 2 === 0) {
    //     console.log(`Il numero ${num} è pari`);
    //     pari++;
    // } else {
    //     console.log(`Il numero ${num} è dispari`);
    //     dispari++;
    // }

    
    // versione slim con operatore ternario
    const tipo = num % 2 === 0 ? 'pari' : 'dispari';
    console.log(`Il numero ${num} è ${tipo}`);
});
console.log(`Totale numeri pari: ${pari}`);
console.log(`Totale numeri dispari: ${dispari}`);