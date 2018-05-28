//average
var average = function(valueOfInterest) {
        var sum = 0;
    var days = Object.keys(stocks);
    var sum = 0;
    days.forEach(function(currentDay){

        var statsForAGivenDay = stocks[currentDay];
        var value= stocks[currentDay];
        sum = sum + value;
    });
    var average = sum/days.length;
    return average;
    }
//function forEach(callback) {
//    for (var i=0; i<this.length; i++) {
//        var currenThing = this [i];
//        callback(currentThing)
//    }
//}

console.log(average('1. open'));
console.log(average('2. high'));