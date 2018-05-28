function tipcalc() {
    var split = parseInt(prompt('How many people are splitting the bill?'));
    var service = (prompt('How was the service? Enter good, fair or poor?'));
    var total = parseInt(prompt('What is the bill total?'));

    if (service == 'good') {
        console.log('Your total is $' + ((total * 1.20)/split) + ' per person.')
    }
    else if (service == 'fair') {
        console.log('Your total is $' + ((total * 1.15)/split) + ' per person.')
    }
    else if (service == 'poor') {
        console.log('Your total is $' + ((total * 1.10)/split)+ ' per person.')
    }
}
tipcalc();