let availableDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let discountCodeUsed = [];


function calculateOffer(e){
    e.preventDefault();
    
    let hours = parseInt(document.getElementById("hours").value);
    let optionTypeOffer = parseInt(document.getElementById("type-of-work").value);
    let discountCode = document.getElementById("discount-code").value;

    let finalPrice = 0;

    switch(optionTypeOffer){
        case 0:
            // No option selected
            alert("Attenzione non hai selezionato un tipo di offerta");
            return;
        case 1:
            // Backend offer type
            finalPrice = 20.5 * hours;
            break;
        case 2:
            // Frontend offer type
            finalPrice = 15.3 * hours;
            break;
        case 3:
            // Project Analysis offer type
            finalPrice = 33.6 * hours;
    }

    // Conosco il prezzo

    // Verifico e applico eventuali sconti
    let DiscountCodePresent = false;
    for(let i = 0; i < availableDiscountCodes.length; i++){
        if(availableDiscountCodes[i] == discountCode){
            DiscountCodePresent = true;

            // BONUS: Rimouvere il codice sconto una volta usato,
            // attenzione a non riassegnare l'array, perche splice
            // ritorna l'elemento rimosso
            availableDiscountCodes.splice(i, 1); 

            // Aggiungo il codice sconto usato all'array di codici sconto usati
            discountCodeUsed.push(discountCode);

            break;
        }
    }

    // Conosco se il codice esisteva

    // Se ho scritto un codice sconto (discountCode != "") E(&&) il mio codice sconto non è stato trovato (!DiscountCodePresent)
    if((discountCode != "") && !DiscountCodePresent){
        // allora ...

        if(discountCodeUsed.includes(discountCode)){
            alert("Il codice sconto inserito è gia stato usato");
        } else {
            alert("Il codice sconto inserito non è valido");
        }

        // BONUS: Far diventare il codice sconto errato di colore rosso
        document.getElementById("discount-code").classList.add("text-danger");
    }

    // Se c'è il codice valido allora applico lo sconto
    if(DiscountCodePresent){
        finalPrice = 0.75 * finalPrice;
    }

    // ho il prezzo scontato se dev'essere scontatto, oppure ho quello non scontato

    finalPrice = finalPrice.toFixed(2);

    document.getElementById("price").innerHTML = "Il prezzo finale è di: " + finalPrice + "€";
}