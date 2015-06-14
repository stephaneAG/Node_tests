// yup, a JS script executed from the terminal thanks to NodeJS

var fs = require('fs');
console.log("Hi there ! I am currently producing an output ...");

var my_reference_array = ['blurp', 'glork', ' ', 'pluutch'];
var in_line = my_reference_array.join('|');

// THE ACTUAL WRITING BEGINS HERE //

// the first way -> blocking, wrinting at once to the file
//fs.writeFile("test.txt", in_line + "\n", function(err){
//	if(err){
//		console.log("Shit happened ! ...");
//	} else {
//		console.log("Writing to file OK ...");
//	}
//});


// the second way -> non-blocking, writng to the file progressively in bits and pieces
var stream = fs.createWriteStream('bits_and_pieces_output_file.txt'); // we create a file output for thre stream we're gonna use

stream.once('open', function(fd){
	// do stuff while the file is open ( for example ,write to it ? )
	stream.write("Another first row\n");
	stream.end();
});

console.log("Done ! > exiting ...");