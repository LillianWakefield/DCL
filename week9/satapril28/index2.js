$(function(){
    Promise.all([$.get('https://dog.ceo/api/breed/beagle/images/random'),$.get('https://dog.ceo/api/breed/chow/images/random'), $.get('https://dog.ceo/api/breed/akita/images/random'), $.get('https://dog.ceo/api/breed/dingo/images/random'),$.get('https://dog.ceo/api/breed/eskimo/images/random')])
    .then(function(value){
    console.log('All the data was fetched!')
    console.log(value);
})

});