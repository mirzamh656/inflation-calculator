function inflationCalculator(){
    let stopaInflacije = document.querySelector("#inflationRate");
    let novac = document.querySelector("#money");
    let godine = document.querySelector("#years");

    // Value je po default-u string pa se mora pretvorit u broj(u ovom slučaju decimalan)
    stopaInflacije = parseFloat(stopaInflacije.value);
    novac = parseFloat(novac.value);
    godine = parseFloat(godine.value); 
    
    // Formula za inflaciju
    let vrijednost = novac + (novac * (stopaInflacije / 100)); 

    for (let i = 1; i < godine; i++) {
        vrijednost += vrijednost * (stopaInflacije / 100);
    }
    
    // Zaokruzivanje na 2 decimale
    vrijednost = vrijednost.toFixed(2);

    // Kreiranje novog elementa za ispis rezultata
    let noviElement = document.createElement("div");
    noviElement.id = "rezultat";
    noviElement.textContent = `Današnjih ${novac} eura će za ${godine} godina vrijediti ${vrijednost} eura`;
    document.querySelector(".container").appendChild(noviElement);
}