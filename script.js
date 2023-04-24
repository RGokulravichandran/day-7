var request = new XMLHttpRequest()
request.open('GET','https://restcountries.com/v3.1/all', true)
request.send()
request.onload = function(){
    var data = JSON.parse(request.response)
    console.log(data)
     // Get all the countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter(country=> country.region ==='Asia')
    console.log(`Asia Countries :`, asiaCountries)
    // Get all the countries with a population of less than 2 lakhs using Filter function
    const lowPopulationCountries = data.filter(country=>country.population<200000)
    console.log(`Below 2 laks countries:`, lowPopulationCountries)
     // Print the following details name, capital, flag using forEach function
     data.forEach(country=> { console.log(`Name:${country.name.common}, Capital:${country.capital}, Flag:${country.flags.png}`)
     // Print the total population of countries using reduce function
     const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0)
     console.log(`Total Population:`, totalPopulation)
     // Print the country which uses US Dollars as currency.
     const usdCountries = data.find(country => country.currencies.USD);
    console.log('USD Countries:', usdCountries);
     });
}   