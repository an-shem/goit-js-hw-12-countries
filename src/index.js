import './styls.css';
const debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries';

const inputRef = document.querySelector('.input-search');
inputRef.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const searchQuery = e.target.value;
  fetchCountries(searchQuery)
    .then(arreyCountries => {
      processesArray(arreyCountries);
    })
    .catch(error => {
      console.log(error);
    });
}

function processesArray(arrey) {
  if (arrey.length > 10) {
    console.log(`Сделайте более точный запрос`);
  }
  if (arrey.length >= 2 && arrey.length <= 10) {
    //
  }
  if (arrey.length === 1) {
    //
  }
}
