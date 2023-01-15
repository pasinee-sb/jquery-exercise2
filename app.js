$(function(){
    $('#add').on('click', function(evt){
    evt.preventDefault();
    let title = $(".movie-name").val();
    let rating = $(".movie-rating").val();
   $("form").append(`<div class="mymo"><h1>${title}</h1>
    <p>Rating : ${rating}</p>
    <button class = "remove">Remove from list </button></div>`);
   


    $('.remove').on('click', function(){
        $(this).parent().remove();
    })
})})