import './styls.css';
import fetchCountries from './js/fetchCountries';

import templateLIst from './templates/template-list.hbs';
import templateData from './templates/template-data.hbs';

import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');

// -----------------------------------------------------

const boxDataaRef = document.querySelector('.search-display');
const inputRef = document.querySelector('.input-search');

inputRef.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const searchQuery = e.target.value.trim();
  boxDataaRef.innerHTML = '';
  if (searchQuery === '') return;
  fetchCountries(searchQuery).then(arrayCountries => {
    arrayHandler(arrayCountries);
  });
}

function arrayHandler(array) {
  if (array.length > 10) {
    error({
      type: 'error',
      title: 'ОШИБКА!',
      text: 'Сделайте запрос более специфичным.',
      animateSpeed: 'normal',
      delay: 1500,
      mouseReset: true,
    });
  }

  if (array.length >= 2 && array.length <= 10) {
    const markupBox = array.map(({ name }) => name);
    boxDataaRef.innerHTML = templateLIst(markupBox);
  }
  if (array.length === 1) {
    const markupBox = array.map(
      ({ name, capital, population, languages, flag }) => ({
        name,
        capital,
        population,
        languages: languages.map(item => item.name),
        flag,
      }),
    );
    boxDataaRef.innerHTML = templateData(...markupBox);
  }
}
