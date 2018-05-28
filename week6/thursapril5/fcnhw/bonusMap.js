var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
function byeNow(input) {
    var output = input.map(function(element){
        return 'Bye for now, '+ element + ' !';
    });
console.log(output);
}

function map(arr,fun){
    return fun(arr);
}

map(people,byeNow);