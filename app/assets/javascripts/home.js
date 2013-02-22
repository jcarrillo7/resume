$(document).ready(function(){
var fact = $("#fact");
var i = 0;
var facts = [
	
	'an arduino geek.',
	'a gokart racer.',
	'a futbol player.',
	'an aspiring iOS developer.',
	'a tinkerer.',
	'a pretty good cook.',
	'a Galaga addict.',
	'an Android developer.',
	'a themepark junkie.',
	'a Puerto Rican.',
	'a Colombian.',
	'a secret agent.',
        'a salsa dancer.'
];

$(function() {

	function newPhrase() {

		fact.html(facts[i]);
		
		i++;
		
		if ( i == facts.length ) i = 0;
	}
	
	function switchPhrase() {
		fact.fadeOut( 200, "swing", function(){
		
			fact.html(newPhrase());
		}).fadeIn(200, "swing");
	}

	setInterval(switchPhrase, 3000);
});
});
