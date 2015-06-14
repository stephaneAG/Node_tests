// yup, a JS script executed from the terminal thanks to NodeJS

var fs = require('fs');
console.log("Hi there ! I am currently producing an output ...");

var my_reference_array = ['blurp', 'glork', ' ', 'pluutch'];
var in_line = my_reference_array.join('|');

fs.writeFile("test.txt", in_line + "\n", function(err){
	if(err){
		console.log("Shit happened ! ...");
	} else {
		console.log("Writing to file OK ...");
	}
});


console.log("Done ! > exiting ...");