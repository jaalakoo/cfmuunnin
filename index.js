const fahrenheitSyote =  document.guerySelector('input')
const fahrenheitTuloste =  document.guerySelector('#fahrenheit')
const fahrenheitTuloste =  document.guerySelector('#celsius')
const muunnaButton = document.guerySelector('button');

function muunna(){
    let syote = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = syote;
}

muunnaButton.addEventListener('click', muunna)