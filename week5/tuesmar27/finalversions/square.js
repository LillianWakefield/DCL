function square() {
    var num = parseInt(prompt('How big do you want your Square?'));
    var myArr = [];
    var star = Array(num+1).join('*');
    for(var i=0; i<num; i++) {
        console.log(star)
    }
}

square();