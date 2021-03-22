const URL = ' https://restcountries.eu/rest/v2/';

function fetchCountries(searchQuery) {
  return fetch(`${URL}name/${searchQuery}`).then(response => response.json());
}

export default fetchCountries;
