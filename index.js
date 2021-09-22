const Syote =  document.querySelector('#input')
const Syote2 =  document.querySelector('#input2')
const fahrenheitTuloste =  document.querySelector('#faarao')
const celsiusTuloste =  document.querySelector('#celsius')
const fahrenheitTuloste2 =  document.querySelector('#faarao2')
const celsiusTuloste2 =  document.querySelector('#celsius2')
const muunnaButton = document.querySelector('#ftoc');
const muunnaButton2 = document.querySelector('#ctof');

function fahrenheitCelsiukseksi(fahrenheit) {
    let celsius = (fahrenheit-32)/1.8;
    return celsius;
}

function CelsiusFahrenheitiksi(celsius) {
    let faarao = celsius * 1.8 + 32;
    return faarao;
}

function muunna(){
    let syote = Syote.value;
    fahrenheitTuloste.textContent = syote;
    celsiusTuloste.textContent = fahrenheitCelsiukseksi(syote);
}

function muunna2(){
    let syote = Syote2.value;
    celsiusTuloste2.textContent = syote;
    fahrenheitTuloste2.textContent = CelsiusFahrenheitiksi(syote);
}

muunnaButton.addEventListener('click', muunna)
muunnaButton2.addEventListener('click', muunna2)
