var express = require( "express" )
var ejs = require( "ejs" )
var app = express();

var celebName = "BEAN";
var celeb = {
	results: {
		"profession": "actor",
		"known_for": [ "movie star", "cloning", "comedy" ],
		"gender": "",
		"first letter of first name": "m",
		"extra hint": "Time out!"
	}
}

app.get( '/', function ( request, response ) {
	response.json( celeb )
} )

app.get( '/:guess', function ( request, response ) {

	var celebGuess = (request.params.guess).toUpperCase();
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