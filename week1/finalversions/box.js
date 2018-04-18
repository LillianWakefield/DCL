function box() {
    var w = parseInt(prompt('Width?'));
    var h = parseInt(prompt('Height?'));
    var top_bottom = Array(w+1).join('*');
    var sides = '*' + Array(w-1).join(' ') + '*';
    console.log(top_bottom);
    for (i=2; i<h; i++){
        console.log(sides);
    };
    console.log(top_bottom);
}
box();