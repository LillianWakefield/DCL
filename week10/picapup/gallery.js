$(document).ready(function() {
    //gets object from local storage.
    var galleryJSON = sessionStorage.getItem('gallery');
    var gallery = JSON.parse(galleryJSON);
    //renders object HTML
    function renderCutePics(galleryArray) {
        var finalHTML = '';

        galleryArray.forEach(function(currentPic) {
            finalHTML += '<div class="card" style="width: 18rem">';
            finalHTML += '<div class="card-body pic">';
            finalHTML += '<image class="card-img-top" src="' + currentPic + '">';
            finalHTML += '<br>';
            finalHTML += '<div class="align-right"><button type="button" class="btn btn-dark delete">X</button></div>';
            finalHTML += '</div>';
            finalHTML += '</div>';

        });

        return finalHTML;

    }
    var galleryHTML = renderCutePics(gallery);
    $('.photo-container').html(galleryHTML);
    //deletes selected picture.
    $('.delete').click(function(){
        event.preventDefault();
        $(this).parents('.card').remove();
       }); 
});
