const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
   
    calculate();
});



function calculate() {
    //  API WORKS, take entire function and update HTML elements appropraitely..
    const from_currency = from_currencyEl.value;
    const to_currency = to_currencyEl.value;

    fetch('https://v6.exchangerate-api.com/v6/56d17cce079bf5c4493a2b66/pair/USD/' + to_currency)
        .then(res => (res.json()))
        .then(data => { 
             console.log(data)
             const conversion =  from_ammountEl.value * data.conversion_rate;
             to_ammountEl.value = conversion;
             })

  }


calculate();
