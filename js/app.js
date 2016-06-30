$(document).ready(function(){
	$("#submit-button").click(function(event) {
		event.preventDefault();
		var mySearchTerm = $("#query").val();
		getRequest(mySearchTerm);
	});

	function getRequest(searchTerm){
  		/*var params = {
    		key: 'AIzaSyCqj3BHUiN9e2cQPZjuZZ0eIknr4kkB-Uo',
        q: searchTerm,
        part: 'snippet'
  		};
  		url = "https://www.googleapis.com/youtube/v3/search";
      
  		$.getJSON(url, params, function(data){
    		showResults(data.Search);
  		});*/
      /*var params = ;*/
      url = "https://www.googleapis.com/youtube/v3/search";
      
      $.getJSON(url, {
        key: 'AIzaSyCqj3BHUiN9e2cQPZjuZZ0eIknr4kkB-Uo',
        q: searchTerm,
        part: 'snippet'}).done(function(json){
        showResults(json);
      });
	}

	function showResults(myResults) {
    $("#query").val('');
    $("#search-results").empty();
		$("#search-results").append("<p>Thumbnails:</p>");
    $.each(myResults.items, function(index, value){
    		$("#search-results").append("<p><a href=http://youtube.com/watch?v=" + value.id.videoId + " target='_blank'><img src='" + value.snippet.thumbnails.medium.url + "' alt='thumbnail'></a></p>");
    });
	}
});