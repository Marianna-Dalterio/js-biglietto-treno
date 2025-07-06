//chiedere all'utente il numero di chilometri che vuole percorrere
const Km = Number(prompt("Numero di chilometri che desideri percorrere"));
//chiedere all'utente l'età del passeggero
const passengerAge = Number(prompt("Età del passeggero "));
//prezzo del biglietto in base ai km senza sconto, attenzione ad usare punto e non virgola con i numeri
const ticketPrice = (0.21 * Km)
//variabile dello sconto 
let discount = 0;
//sconto 20% per minorenni, 40% per over 65
if (passengerAge < 18) {
    discount = 20
} else if (passengerAge > 65) {
    discount = 40
}
//prezzo finale
const finalPrice = (ticketPrice * (1 - discount / 100))
//spiegazione: 
// const scontoPercentuale = 20;
//Qui stai solo dicendo: “voglio applicare uno sconto del 20%”.
//La percentuale è salvata in una variabile, così puoi cambiarla in base all’età più avanti.
//const prezzoScontato = prezzo * (1 - scontoPercentuale / 100);
//Questa è la riga chiave. Vediamola in pezzi:

//🔹 scontoPercentuale / 100
//Se scontoPercentuale vale 20 → 20 / 100 = 0.2

//🔹 1 - 0.2
//Significa che paghi l'80% del prezzo → 0.8

//🔹 prezzo * 0.8
//E questo è il tuo prezzo scontato

//stampa prezzo
console.log("Prezzo finale:", finalPrice.toFixed(2) + "\u20AC")