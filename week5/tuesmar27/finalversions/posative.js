function posative(input) {
    var output = [];
    for(var i=0;i<input.length; i++){
        if(input[i] >= 0){
            output += input[i] +', '
        }
    }
    document.write(output+'<br>')
}
posative([-1,-2,3,4,0])
