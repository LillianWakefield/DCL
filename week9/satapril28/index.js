$(function(){
    $.get('https://dog.ceo/api/breed/beagle/images/random')
    .then(function(value){
    console.log('Data was fetched!')
    console.log(value);
    return $.get('https://dog.ceo/api/breed/beagle/images/random')
        })
        $.get('https://dog.ceo/api/breed/chow/images/random')
    .then(function(value){
    console.log('Data was fetched!')
    console.log(value);
    return $.get('https://dog.ceo/api/breed/chow/images/random')
        })
        $.get('https://dog.ceo/api/breed/akita/images/random')
    .then(function(value){
    console.log('Data was fetched!')
    console.log(value);
    return $.get('https://dog.ceo/api/breed/akita/images/random')
        })
        $.get('https://dog.ceo/api/breed/dingo/images/random')
    .then(function(value){
    console.log('Data was fetched!')
    console.log(value);
    return $.get('https://dog.ceo/api/breed/dingo/images/random')
        })
        $.get('https://dog.ceo/api/breed/eskimo/images/random')
    .then(function(value){
    console.log('Data was fetched!')
    console.log(value);
    return $.get('https://dog.ceo/api/breed/eskimo/images/random')
        })
    
   
});