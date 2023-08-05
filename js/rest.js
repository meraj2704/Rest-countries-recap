const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries);
    const countrieHtml = countries.map(country => getCountryHtml(country));
    console.log(countrieHtml);
    const conatainer = document.getElementById('countries');
    conatainer.innerHTML = countrieHtml.join(' ');
}

const getCountryHtml = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src = "${country.flags.png}">
        </div>
    `
}
loadCountries();