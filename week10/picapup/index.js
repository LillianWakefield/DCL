$(document).ready(function() {
    var cuteImg = "";
    //Renders images to the screen when page first loads.
    renderCute(); 
    //Refreshes images 
    $('.refresh').click(function(){
        event.preventDefault();
        renderCute();
       }); 
    //Saves selected image to local storage.
    document.getElementById("card-left").addEventListener("click", function(){
        var galleryJSON = sessionStorage.getItem('gallery');
        var gallery = JSON.parse(galleryJSON);
        if (gallery === null) {
            gallery = [];
        };
        gallery.push(document.getElementById("card-left").src);
        galleryJSON = JSON.stringify(gallery);
        sessionStorage.setItem('gallery', galleryJSON);
        renderCute();
    });
    document.getElementById("card-right").addEventListener("click", function(){
        var galleryJSON = sessionStorage.getItem('gallery');
        var gallery = JSON.parse(galleryJSON);
        if (gallery === null) {
            gallery = [];
        };
        gallery.push(document.getElementById("card-right").src);
        galleryJSON = JSON.stringify(gallery);
        sessionStorage.setItem('gallery', galleryJSON);
        renderCute(); 
    });
});  