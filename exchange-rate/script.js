const API_KEY= '2edd51d5d81eb66d0c09b552';
const exchangeCurrency = 'AFN';
const convertingCurrency = '';
const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${exchangeCurrency}`;

let DATA;
let map = new Map();
const setCurrency = (fetchedData) => {
  for (const key in fetchedData) {
    if (Object.hasOwnProperty.call(fetchedData, key)) {
      map.set(key, fetchedData[key])
    }

  };
  console.log(map.keys())
}

async function fetchHandler() {
  const result = await fetch(url)
  .then(raw => raw.json())
  .then(data => setCurrency(data.conversion_rates));
  return result;
}

window.addEventListener('DOMContentLoaded', fetchHandler)
















// const currencyEl_one = document.getElementById('currency-one');
// const amountEl_one = document.getElementById('amount-one');
// const currencyEl_two = document.getElementById('currency-two');
// const amountEl_two = document.getElementById('amount-two');
// const rateEl = document.getElementById('rate');
// const swap = document.getElementById('swap');

// function calculate() {
//   const currency_one = currencyEl_one.value;
//   const currency_two = currencyEl_two.value;
//   fetch("https://open.exchangerate-api.com/v6/latest")
//     .then(res => res.json())
//     .then(data => {
//       //  console.log(data);
//       const rate = data.rates[currency_two] / data.rates[currency_one];
//       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
//       amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
//     });
// }


// // Event Listener
// currencyEl_one.addEventListener('change', calculate);
// amountEl_one.addEventListener('input', calculate);
// currencyEl_two.addEventListener('change', calculate);
// amountEl_two.addEventListener('input', calculate);

// swap.addEventListener('click', () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   calculate();
// });


// calculate();