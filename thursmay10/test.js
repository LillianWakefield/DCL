function reverse(toReverse) {
    return toReverse.split('').reverse().join('');
}

// Detectes if a string is a pallindrome
function detectPallindrome(toCheck) {
    var pallindrome = toCheck.split('').reverse().join('');
    console.log(pallindrome)
    if(toCheck == pallindrome){
        console.log('true')
    }
    else {
        return console.log('false')
    }

}

// Shifts every letter forward by one. Z goes
// to A (wraps around)
function shift(toShift) {
    var cipher = {' ': ' '};
    var y = []
    var x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(var k=1 ; k<x.length; k++) {
        y.push(x[k]);
    }
    for(var l=0; l<1; l++) {
        y.push(x[l]);
    }
    for (var i=0;i<x.length;i++) {
        cipher[x[i]] = y[i]; 
        }
    var user_out = '';
    for (var l =0; l<toShift.length; l++){
        var c = toShift.charAt(l);    
        var value = cipher[c];
            user_out += value;
        }
console.log(user_out);
return user_out;
}
shift('zebra')

// Checks to see if the target string is a number
function isNumber(toCheck) {
    if(isNaN(toCheck)){
        console.log('true')
    }
    else {
        console.log('false')
    }
}
isNumber(2)