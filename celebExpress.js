var express = require( "express" )
var ejs = require( "ejs" )
var app = express();

var celebName = "Chuck_Palahniuk";
var celeb = {
	results: {
		"instructions": "Guess the name in this format: Anna_Kendrick",
		"profession": "Writer",
		"known_for": [ "writing awesome books and being awesome", "Portlander", "funny poignant books", "fiction" ],
		"gender": "male",
		"first letter of first name": "C",
		"quotes": [ "Our Generation has had no Great war, no Great Depression. Our war is spiritual. Our depression is our lives.", "We all die. The goal isn't to live forever, the goal is to create something that will.", "Find joy in everything you choose to do. Every job, relationship, home... it's your responsibility to love it, or change it." ],
		"another hint": "The first rule is... we don't talk about it..."

	}
}

app.get( '/', function ( request, response ) {
	response.json( celeb )
} )

app.get( '/:guess', function ( request, response ) {

	var celebGuess = request.params.guess;
	if ( celebName === celebGuess ) {
		response.json( {
			correct: "Nice work!"
		} )
	}
	else {
		response.json( {
			incorrect: "Wrong!"
		} )
	}
} )

app.listen( 3000 )