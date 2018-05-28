function arrayOfObjects() {
    var days = Object.keys(stocks);

    days.forEach(function(currentDay){

        var statsForAGivenDay = stocks[currentDay];
        var currentDateOpenClose = {
            date: currentDay,
            open: statsForAGivenDay["1. open"],
            close: statsForAGivenDay["4. close"]
        };
        array.push(currentDateOpenClose);

    });
    return array;
}

console.log(arrayOfObjects());