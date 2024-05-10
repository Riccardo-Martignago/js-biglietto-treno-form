

document.querySelector('button').addEventListener('click', function(){
    let userAge = document.getElementById('age');
    const age = Number.parseFloat (userAge.value);
    let userKm = document.getElementById('km');
    const km = Number.parseFloat (userKm.value);
    let sconto = '';
    let priceKm = km * 0.267113;
    if(age < 21){
        sconto = 24.552 / 100
    }
    else if(age > 63){
        sconto = 37.893 / 100
    }
    else{
        sconto = 0
    }
    finalPrice = priceKm - (priceKm * sconto);
    console.log(finalPrice);
})