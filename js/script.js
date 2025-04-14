// Calcolo del costo biglietto del treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const priceKm = 0.21;
const discount20 = 20;
const discount40 = 40;

const distanceTotal = prompt("Inserire quanti Kilomtri vanno percorsi");
console.log("Distanza totale del viaggio" + " " + distanceTotal + " km");

const userAge = prompt("Inserire quanti anni hai");
console.log("L'età dell'utente è di" + " " + parseInt(userAge));

if (isNaN(distanceTotal) || isNaN(userAge)) {
  alert("I dati inseriti sono sbagliati");
  setTimeout(function () {
    location.reload();
  }, 100);
}

const totalPrice = distanceTotal * priceKm;
console.log("Il prezzo totale del viaggio è di" + " " + totalPrice);

//Blocco logico
console.log("====Calcolo degli sconti====");
const u18discount = (totalPrice * discount20) / 100;
console.log("Lo sconto se hai meno di 18 anni è di" + " " + u18discount);

const o65discount = (totalPrice * discount40) / 100;
console.log("Lo sconto se sei over 65 è di" + " " + o65discount);

console.log("====Calcolo prezzo scontato====");
const u18discountPrice = totalPrice - u18discount;
console.log("Prezzo del viaggio se hai meno di 18 anni è di" + " " + u18discountPrice);

const o65discountPrice = totalPrice - o65discount;
console.log("Prezzo del viaggio se hai più di 65 anni è di" + " " + o65discountPrice);

if (userAge < 18) {
  alert(`Ha diritto allo sconto under 18 - totale costo del biglietto ${u18discountPrice.toFixed(2)} €`);
} else if (userAge >= 65) {
  alert(`Ha diritto allo sconto over 65 - totale costo del biglietto ${o65discountPrice.toFixed(2)} €`);
} else {
  alert(`Non ha diritto allo sconto - il prezzo è di ${totalPrice.toFixed(2)} €`);
}
