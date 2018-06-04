$(function(){
var students = [];
    $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(breeds){
        breeds.message.forEach(function(element){ 
            $('body').append('<div>'+element+'</div>')
        });

    });
});
