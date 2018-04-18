console.log('script loaded');
function leet(input){
    String.prototype.allReplace = function(obj) {
        var retStr = this;
        for (var x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
        }
        return retStr;
    };
    
    console.log(input.allReplace({'E': '3', 'G': '6', 'I': '1', 'O': '0','S': '5', 'T': '7'}));
}
leet('EEGGTTSOKKK');