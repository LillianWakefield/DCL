var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

function welcome(input){
input.forEach(function(element){
console.log('Welcome to ' + element. name + ". Today's temperature is " + element.temperature + ' degrees.');
}
)};  
function forEach(arr, fun){
       fun(arr);
   };

forEach(cities,welcome);