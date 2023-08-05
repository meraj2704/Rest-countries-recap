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
    const {name,flags,area,region} = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p> Area : ${area}</p>
            <p> Region : ${region} </p>
            <img src = "${flags.png}">
        </div>
    `
}
loadCountries();