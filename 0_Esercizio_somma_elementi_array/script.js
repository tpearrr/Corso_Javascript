let arr = [];
const n = 10;
const max = 100;

for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * max);
    arr.push(randomNum);
}

console.log("Array generato:", arr);

let sum = 0;

arr.forEach(element => {
    sum += element;
});

console.log("Somma degli elementi dell'array:", sum);