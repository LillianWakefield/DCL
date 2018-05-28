function printNumbers(start, stop) {
    var start = parseInt(prompt('Start?'));
    var stop = parseInt(prompt('Stop?'));
    myArr = [];
    for (var i=start; i<stop+1; i++) {
    myArr.push(i);
    }
    console.log(myArr);
}
printNumbers();

function whileNumbers() {
    var start = parseInt(prompt('Start?'));
    var stop = parseInt(prompt('Stop?'));
    var i = start;
    var myArr = [];
    while (i < stop+1) {
        myArr.push(i);
        i++;
    }
    console.log(myArr);
}

whileNumbers();

