// Calcolo del costo biglietto del treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

/**
 * Raccolta dati
 * - KM da percorrere
 * - Età del passeggero
 *
 * Costanti
 * - prezzo biglietto al km = 0.21 €
 *
 * Esecuzione logica
 * Chiedi all'utente quanti anni ha
 * Chiedi all'uutente quanti km deve percorrere
 * Calcolare quanto è la distanza del viaggio
 * totalPrice = distanceTotal * priceKm
 *
 * Calcolo lo sconto
 * u18discount = totalPrice * 20 / 100
 * o65discount = totalPrice * 40 / 100
 *
 * u18discountPrice = totalPrice - u18discount
 * 065discountPrice = totalPrice - 065discount
 *
 *
 * let messaggio
 *
 * SE età dell'user è <18
 * message "Lo sconto è di ${u18discountPrice}
 * els
 *
 * Output:
 * Stampa del risultato
 *
 */
