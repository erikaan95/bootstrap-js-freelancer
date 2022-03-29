document.getElementById("bottoneSend").addEventListener("click", funzioneCalcoloPrezzo);
function funzioneCalcoloPrezzo(event) {
    event.preventDefault();
    back=document.getElementById("tipoDiLavoro").value;
    front=document.getElementById("tipoDiLavoro").value;
    analyst=document.getElementById("oreRichieste").value;
    codiciSconto=document.getElementById("codiceSconto").value;
    console.log(back);
    console.log(codiciSconto);
    let arrayCodiciSconti=["YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24"]
    for(let i=0; i<arrayCodiciSconto.length; i++){

        if((back)&& (codiciSconto==arrayCodiciSconto[i])){
            prezzo=20.5*oreDiLavoro*0.75;

            document.getElementById("risultato").innerHTML=prezzo;

        }else{
            prezzo=20.5*oreDiLavoro;
            document.getElementById("risultato").innerHTML=prezzo
        }
    }
}