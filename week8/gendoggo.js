$(function(){
    $.get('https://dog.ceo/api/breeds/list', function(breeds){
        breeds.message.forEach(function(element){ 
            $('select').append('<option value='+element+'>'+element+'</option>')
        });
    });
    $('select').change(function(){
        var currentBreed = $('select').val();
        $.get('https://dog.ceo/api/breed/'+currentBreed+'/images/random');
    });
    $('.btn-primary').click(function(){
        $('.btn-primary').html('Generating doggo...')
        var currentBreed = $('select').val();
        $.get('https://dog.ceo/api/breed/'+currentBreed+'/images/random', function(data){
            var doggo = $('<image src="'+data.message+'"/>');
            $('.pic').append(doggo);
            $('.btn-primary').html('Get doggo');
        });
        });

});
