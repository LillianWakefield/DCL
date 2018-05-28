function acronym(input){
const fullword = input;


const output = fullword.reduce((accumulator, element) => accumulator + element[0], '');
console.log(output);
}

acronym(['national', 'aeronautics', 'space', 'administration'])