import templateLIst from '../templates/template-list.hbs';
import templateData from '../templates/template-data.hbs';

import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaultModules.set(PNotifyMobile, {});

// ---------------------------------------------------
function arrayHandler(array, boxDataRef) {
  if (array.length > 10) {
    error({
      title: 'ERROR!',
      text: 'Refine your request.',
      animateSpeed: 'normal',
      delay: 2000,
    });
  }

  if (array.length >= 2 && array.length <= 10) {
    const markupBox = array.map(({ name }) => name);
    boxDataRef.innerHTML = templateLIst(markupBox);
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
    boxDataRef.innerHTML = templateData(...markupBox);
  }
}

export { arrayHandler, error };
