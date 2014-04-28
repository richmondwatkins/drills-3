/* global _:true */
/* jshint unused: false*/
/* global moment: true */
(function(){
  'use strict';

  $(document).ready(init);

  function init () {
  $('#go').click(getMovies);
  }


function getMovies(){
  var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=53ubb9a3qu66h5hmty5b2ern&callback=?';
  $.getJSON(url, getPosters);

}

function getPosters(data) {
  var post = data.movies.map(findPoster);
  var title = data.movies.map(findTitle);

  display(post, title);
  console.log(post,title);
  console.log(data);
}

function display(poster, title) {
  for(var i =0; i < title.length; i++){

    var $divPost = $('<img class="poster">');
    var $divTitle = $('<div>');
    var $container = $('<div class="container">');
    $divPost.attr('src', poster[i]);
    $divTitle.text(title[i]);
    $container.append($divPost).append($divTitle);

    $('body').append($container);
  }
}



// or(var i = 0; i < day.length; i ++) {
//     var $img = $('<img>');
//     var $divDay = $('<div>');
//     var $divTemp = $('<div>');
//     var $container = $('<div class="container">');
//     $divTemp.text(temp[i]);
//     $divDay.text(day[i]);
//     $img.attr('src', icons[i]);
//     $container.append($img).append($divTemp).append($divDay);
//
//     $('body').append($container);



function findPoster(data) {
  return data.posters.original;
}

function findTitle(data) {
  return data.title;
}

})();
