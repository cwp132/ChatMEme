

$(document).ready(function(event)  {




$("#submit-chat").on("click",  function(event){
    event.preventDefault();

    var userName = $("#user-name").val().trim();
    var message = $("#user-message").val().trim();


    getGiphys(message);

});










function getGiphys(searchTerm) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&limit=100&rating=&q=" + searchTerm;

    $.ajax({
        url: queryURL,
        method: "GET"


    }).done(function(response) {
        console.log(response)




    });




}
});