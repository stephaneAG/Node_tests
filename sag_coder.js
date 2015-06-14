// sag_coder v0.1a

// import the necessary
var fs = require('fs'); //import NodeJS's filesystem object
//var path = require('path'); // import NodeJS's path Object ( helpers for path / extensions )
// to allow using: path.extname('index.html')


// helper fcns
function printUsage(){
	console.log('Usage: ');
	console.log('node sag_coder.js encode /this/will/be/the/input/file');
	console.log('node sag_coder.js encode /this/will/be/the/input/file /this/will/be/the/output/file');
	console.log('');
	console.log('node sag_coder.js decode /this/will/be/the/input/file');
	console.log('node sag_coder.js decode /this/will/be/the/input/file /this/will/be/the/output/file');
}

function getFilenameFromPath( thePath){
	var i = thePath.lastIndexOf('/');
	return (i < 0) ? thePath : thePath.substr(i+1);
}

function getPathWithoutFilename( thePath){
	var i = thePath.lastIndexOf('/');
	return (i < 0) ? './' : thePath.substr(0, i);
}

function getFileExtensionFromFilename( theFilename) {
    var i = theFilename.lastIndexOf('.');
    return (i < 0) ? '' : theFilename.substr(i);
}

function getFilenameWithoutExtension( theFilename){
	var i = theFilename.lastIndexOf('.');
	return (i < 0) ? theFilename : theFilename.substr(0, i);
}

// check the passed arguments

// we need a minimum of 3 arguments
if(process.argv.length < 3){
	printUsage(); // print the how to use
	process.exit(1); // exit with an error
}
// check what the user wanna do
if( process.argv[2] == '--help' ){
	printUsage(); // print the how to use
	process.exit(code=0); // exit with no error
} else if( process.argv[2] == 'encode' ){
	// check if we are at least passed an input file to encode ( in that case, the output file is simply named 'encoded_<filename>')
	if(process.argv.length == 4){ // we are passed only an input file -> 'll use the defualt for the output file (...)
		var input_filename = getFilenameFromPath( process.argv[3] );
		var input_file_pathOnly = getPathWithoutFilename( process.argv[3] );
		var input_file_nameOnly = getFilenameWithoutExtension( input_filename );
		var input_file_extensionOnly = getFileExtensionFromFilename( input_filename );
		console.log('sag_coder: Input file set to: ' + input_filename + ' ( fullpath: ' + process.argv[3] + ' name: ' + input_file_nameOnly + ' extension: ' + input_file_extensionOnly +')');
		
		var ouput_filename = 'encoded_' + input_file_nameOnly;
		var output_file_extensionOnly = '.sagcoded';
		var output_file_withExtension = ouput_filename + output_file_extensionOnly;
		var output_file_withPath = input_file_pathOnly + ouput_filename + output_file_extensionOnly;
		console.log('sag_coder: Output file set to: ' + output_file_withExtension + ' ( fullpath: ' + output_file_withPath + ' name: ' + ouput_filename + ' extension: ' + output_file_extensionOnly +')');
		
		
		console.log('sag_coder: Starting file encoding...');
	} else if(process.argv.length == 5){ // we are passed both an input & an output file to work with
		var input_filename = getFilenameFromPath( process.argv[3] );
		var input_file_pathOnly = getPathWithoutFilename( process.argv[3] );
		var input_file_nameOnly = getFilenameWithoutExtension( input_filename );
		var input_file_extensionOnly = getFileExtensionFromFilename( input_filename );
		console.log('sag_coder: Input file set to: ' + input_filename + ' ( fullpath: ' + process.argv[3] + ' name: ' + input_file_nameOnly + ' extension: ' + input_file_extensionOnly +')');
		
		var ouput_filename = getFilenameFromPath( process.argv[4] );
		var ouput_file_pathOnly = getPathWithoutFilename( process.argv[4] );
		var ouput_file_nameOnly = getFilenameWithoutExtension( ouput_filename );
		var output_file_extensionOnly = getFileExtensionFromFilename( ouput_filename );
		var output_file_withExtension = ouput_file_nameOnly + output_file_extensionOnly;
		var output_file_withPath = input_file_pathOnly + '/' + ouput_filename + output_file_extensionOnly;
		console.log('sag_coder: Output file set to: ' + output_file_withExtension + ' ( fullpath: ' + output_file_withPath + ' name: ' + ouput_filename + ' extension: ' + output_file_extensionOnly +')');
	
		console.log('sag_coder: Starting file encoding...');
	} else { // we need at least ONE MORE argument
		printUsage(); // print the how to use
		process.exit(1); // exit with an error
	}
} else if( process.argv[2] == 'decode' ){
	console.log('sag_coder: Starting file decoding...');
} else {
	console.log(process.argv[2]);
	printUsage(); // print the how to use
	process.exit(1); // exit with an error
}



// ENCODING STUFF

function encodeStuff( theInputDataFile, theOutputDataFile){
	console.log('sag_coder::encodeStuff Input file:' + theInputDataFile + ' Output file:' + theOutputDataFile);
	
	// -> non-blocking, writng to the file progressively in bits and pieces
	var stream = fs.createWriteStream('bits_and_pieces_output_file.txt'); // we create a file output for thre stream we're gonna use

	// open the stream for writing
	stream.once('open', function(fd){
		// do stuff while the file is open ( for example ,write to it ? )
		stream.write("Another first row\n");
	stream.end(); // finish writing to the stream
});

	
}

// DECODING STUFF

function decodeStuff( theInputDataFile, theOutputDataFile){
	console.log('sag_coder::decodeStuff Input file:' + theInputDataFile + ' Output file:' + theOutputDataFile);
}