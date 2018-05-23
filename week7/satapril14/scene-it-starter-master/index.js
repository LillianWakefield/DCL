$(function(){
    function renderMovies(movieArray) {
        finalHTML = '';
        movieArray.forEach(function(currentMovie){
            finalHTML += '<div class="card" style="width: 18rem">'
            finalHTML +='<image class="card-img-top" src="' + currentMovie.Poster+'">'
            finalHTML +='<div class="card-body">'
            finalHTML +='<div class="title card-text">' + currentMovie.Title +'</div>'
            finalHTML +='<div class="release-date card-text">' + currentMovie.Year +'</div>'
            finalHTML +='<button type="button" class="btn btn-primary" data-id="'+currentMovie.imdbID+'">Add</button>'
            finalHTML += '</div></div>'
        });
        return finalHTML
    }
  $('form').submit(function(e){
    e.preventDefault();
    var searchString = $('.search-bar').val();
    var urlEncodedSearchString = encodeURIComponent(searchString);
    $.ajax({
        method: "GET",
        url: "http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString,
        success:function(response) {
            movieData = response.Search;
            var movieHTML = renderMovies(response.Search);
            $('.movies-container').html(movieHTML);
        }
    })
  });

$('.movies-container').on('click', '.btn-primary',function(){
var imdbID = $(this).data('id');
var movie = movieData.find(function (currentMovie){
    return currentMovie.imdbID == imdbID;
});
var watchlistJSON = localStorage.getItem('watchlist');
var watchlist = JSON.parse(watchlistJSON);
if (watchlist == null) {
    watchlist = [];
};
watchlist.push(movie);
watchlistJSON = JSON.stringify(watchlist);
localStorage.setItem('watchlist', watchlistJSON);

});
});
