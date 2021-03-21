const URL = ' https://restcountries.eu/rest/v2/name/';

function fetchCountries(searchQuery) {
  return fetch(`${URL}${searchQuery}`).then(response => response.json());
}

export default fetchCountries;
