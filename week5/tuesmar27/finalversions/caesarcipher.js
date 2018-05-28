console.log('script loaded')
function caesarcipher(rot, input){
    var cipher = {' ': ' '};
    var y = []
    var x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(var k=rot;k<x.length;k++) {
        y.push(x[k]);
    }
    for(var l=0; l<rot; l++) {
        y.push(x[l]);
    }
    for (var i=0;i<x.length;i++) {
        cipher[x[i]] = y[i]; 
        }
    var user_out = '';
    for (var l =0; l<input.length; l++){
        var c = input.charAt(l);    
        var value = cipher[c];
            user_out += value;
        }
console.log(user_out);
return user_out;
}

caesarcipher(13, 'travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
caesarcipher(13, 'genius without education is like silver in the mine')