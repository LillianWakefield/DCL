$(function () {

    //pulls orders from local storage
    var moviesJSON = localStorage.getItem("watchlist");
     var watchlist = JSON.parse(moviesJSON);
     function renderMovies(movieArray) {
        finalHTML = '';
        movieArray.forEach(function(currentMovie){
            finalHTML += '<div class="card" style="width: 18rem">'
            finalHTML +='<image class="card-img-top" src="' + currentMovie.Poster+'">'
            finalHTML +='<div class="card-body">'
            finalHTML +='<div class="title card-text">' + currentMovie.Title +'</div>'
            finalHTML +='<div class="release-date card-text">' + currentMovie.Year +'</div>'
            finalHTML +='<button type="button" class="btn btn-danger" data-id="'+currentMovie.imdbID+'">Delete</button>'
            finalHTML += '</div></div>'
        });
        return finalHTML
    }

     var getMovies= renderMovies(watchlist);
     $('.movies-container').html(getMovies);
    
});