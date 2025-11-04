class Deck {
  constructor() {
    this.carte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "fante", "donna", "re"];
    console.log("genero nuovo mazzo", this.carte);
  }

  mischia() {
    this.carte.sort((a, b) => 0.5 - Math.random()); // mescola le carte in modo casuale 0.5 - Math.random() restituisce un numero casuale tra -0.5 e 0.5
    // se abbiamo un numero positivo, a viene dopo b, se negativo a viene prima di b
    console.log("mazzo mischiato", this.carte);
  }

  pesca() {
    // const carta = this.carte.shift(); -> logica inversa
    const carta = this.carte.pop();
    console.log("carta pescata", carta);
    console.log("mazzo dopo la pescate", this.carte);
  }
  mettiSotto(carta) {
    // this.carte.push(carta); -> logica inversa
    this.carte.unshift(carta);
    console.log("mazzo dopo metti sotto", this.carte);
  }
}
const deck = new Deck();
deck.mischia();
deck.pesca();
deck.mettiSotto("jolly");