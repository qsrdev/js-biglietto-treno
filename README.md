Dati:

- KM da percorrere
- Età del passeggero

Costanti:

- priceKm = 0.21 €

Esecuzione Logica:
Chiedi all'utente quanti anni ha
Chiedi all'utente quanti km deve percorrere
Calcolare quanto è la distanza del viaggio
totalPrice = distanceTotal \* priceKm

Calcolare lo sconto
u18discount = totalPrice _ 20 / 100
o65discount = totalPrice _ 40 / 100

Calcolare prezzo scontato
u18discountPrice = totalPrice - u18discount
o65discountPrice = totalPrice - 065discount

let messaggio
SE età user è <18
messagge "Ha diritto allo sconto under 18 - totale costo del biglietto ${u18discountPrice}"
ELSE IF età user compresa fra 18 e 65
message "Non ha diritto allo sconto - il prezzo è ${totalPrice}
ELSE età user >65
message "Ha diritto allo sconto over 65 - totale costo del biglietto ${o65discountPrice}"
