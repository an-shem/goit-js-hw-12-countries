import './styls.css';
import fetchCountries from './js/fetchCountries';
import { arrayHandler, error } from './js/array-handler';

const debounce = require('lodash.debounce');

// -----------------------------------------------------
const boxDataRef = document.querySelector('.search-display');
const inputRef = document.querySelector('.input-search');

inputRef.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const searchQuery = e.target.value.trim();
  boxDataRef.innerHTML = '';
  if (searchQuery === '') return;
  fetchCountries(searchQuery).then(arrayCountries => {
    if (arrayCountries.status) {
      error({
        title: 'ОШИБКА!',
        text: 'Нет такой страны',
        animateSpeed: 'normal',
        delay: 2000,
      });
    } else {
      arrayHandler(arrayCountries, boxDataRef);
    }
  });
}
