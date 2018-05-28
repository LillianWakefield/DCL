//don't use this!!!
function caesarcipher(rot, input){
    var cipher =  {};
    var x = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var y = x.slice(rot) + x.slice(0,rot);
    for (var i=0;i<x.length;i++) {
        cipher[x[i]] = y[i]; 
        }
    
  
    var user_out = '';
    for(var x =0; x<input.length; i++) {
        var letter = cipher[x];
        if(letter in cipher){
            user_out+= letter
        }
        else {
            user_out+='&nbsp;'
        }
    }
  document.write(user_out)

}

caesarcipher(13, 'travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
