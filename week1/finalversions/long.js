console.log('script loaded');
function long(input){
    String.prototype.allReplace = function(obj) {
        var retStr = this;
        for (var x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
        }
        return retStr;
    };
    
    console.log(input.allReplace({'ee': 'eeeee', 'oo': 'ooooo'}));
}
long('good enough');