//Loads new images to page.
function renderCute() {
    $.get('https://dog.ceo/api/breeds/image/random', function(data){
            $('#card-left').attr('src', data.message);
        });
        $.get('https://dog.ceo/api/breeds/image/random', function(data){
            $('#card-right').attr('src', data.message);
            }); 
}