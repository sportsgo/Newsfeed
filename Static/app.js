var main = function(){

	// Parse JSON Data
	var articles = $.getJSON( "https://raw.githubusercontent.com/sportsgo/sportsgo.github.io/master/js/data.json",
		function(data) {
        	for(object in data){
        		var obj = data[object]
        		console.log( obj )
        		$("#articles").append('<div class="article">')
        		$("div:last").append('<a href="' + obj.eventUrl + '" target="_blank"> <img src="' + obj.imageUrl + '"></a>')
        		$("div:last").append('<p class="text">' + obj.description + '</p>')
        		$("div:last").append('<hr>')

	       		$("div:last").prepend('<div class="title">')	
        		$("div:last").prepend('<a href="' + obj.eventUrl + '" target="_blank"> <span>' + obj.eventTitle + '</span></a> ')

        	}
	});

	// Update Articles

}

$(document).ready(main)