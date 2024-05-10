const button = document.querySelector('button');

button.addEventListener('click', function(){
    let userAge = document.getElementById('age');
    const age = Number.parseFloat (userAge.value);
    let userKm = document.getElementById('km');
    const km = Number.parseFloat (userKm.value);
    console.log(km, age);
})