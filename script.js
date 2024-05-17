search = async()=>{
    let countryName= country.value
    console.log(countryName);

    if(countryName){
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        response.json().then((data)=>{
            console.log(data[0]);
            // common name
            let commonName = data[0].name.common
            console.log(commonName);
            // official name
            let officialName = data[0].name['official']
            console.log(officialName);
            // capital
            let capital = data[0].capital[0]
            console.log(capital);
            // languages
            let national_languages = []
            for(let lang in data[0].languages){
                national_languages.push(data[0].languages[lang])
            }
            console.log(national_languages);
            // border
            let borders = data[0].borders
            console.log(borders);
            // area
            let area = data[0].area
            console.log(area);
            // maps
            let maps = data[0].maps['googleMaps']
            console.log(maps);
            // population
            let population = data[0].population
            console.log(population);
            // time
            let timeZone = data[0].timezones
            console.log(timeZone);
            // continents
            let continents = data[0].continents
            console.log(continents);
            // flags
            let flag = data[0].flags['png']
            console.log(flag);
            // currency
            
            for(let currency in data[0].currencies){
                var currencyName = data[0].currencies[currency].name
                var currencySymbol = data[0].currencies[currency].symbol
            }
            console.log(currencyName,currencySymbol);


            result.innerHTML = `<div class="card mb-3  cardBody shadow" style="max-width: 800px;">
            <div class="row g-0">
              <div class="col-md-4">  
                <img src=${flag} class="img-fluid p-2 " alt="flag" width="100%">
               <div class="card-body">
                  <div class="card" style="width: 100%;">
                    <ul class="list-group list-group-flush ">
                      <li class="list-group-item">${officialName}</li>
                      <li class="list-group-item">Common Name : ${commonName}</li>
                      <li class="list-group-item">Capital : ${capital}</li>
                     
                    </ul>
                   
                  </div>
               </div>
                
              </div>
              <div class="col-md-8">
                <div class="card-body">
                 
                  <div class="card" style="width: 100%;">
                    <ul class="list-group list-group-flush">
                      
                      <li class="list-group-item">Languages : ${national_languages}</li>
                      <li class="list-group-item">borders : ${borders}</li>
                      <li class="list-group-item">Area : ${area} k.m</li>
                      <li class="list-group-item">Map : ${maps}</li>
                      <li class="list-group-item">population : ${population}</li>
                      <li class="list-group-item">TimeZone : ${timeZone}</li>
                      <li class="list-group-item">Continents : ${continents}</li>
                    </ul>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>`
        })
    }else{
        alert('enter a valid input')
    }
}