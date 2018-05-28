console.log('script loaded')


var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  var newCities = cities.filter(function(element){ 
    if(element.temperature<70.0){
            return element;
    }
    });

  
    var nameOnly = newCities.map(function(element){
        return element.name;
    });

  console.log(newCities);
  console.log(nameOnly);