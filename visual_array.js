// WIP
// some helper functions
function getRandomGlyphValue(){
	var randomGlyph = generateRandomGlyph();
	if(randomGlyph == "/"){
		randomGlyph = "$";
	}
	return randomGlyph;
}

function generateRandomGlyph(){
	var rand = my_big_array[Math.floor(Math.random() * my_big_array.length)][Math.floor(Math.random() * 7)]; // 7 is the maximum number of elements on a line (..)
	return rand;
}


var my_array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var my_array2 = ['i', 'j', 'k', 'l', 'm', 'n', 'o'];
var my_array3 = ['p', 'q', 'r', 's', 't', 'u', 'v'];
var my_array4 = ['w', 'x', 'y', 'z', '/', '/', '/'];
var my_array5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var my_array6 = ['I', 'J', 'K', 'L', 'M', 'N', 'O'];
var my_array7 = ['P', 'Q', 'R', 'S', 'T', 'U', 'V'];
var my_array8 = ['W', 'X', 'Y', 'Z', '/', '/', '/'];

var my_big_array = [my_array1, my_array2, my_array3, my_array4, my_array5, my_array6, my_array7, my_array8];

for(var i=0; i < my_big_array.length; i++){
	var current_array = my_big_array[i];
	var current_array_splitted = current_array.join('  ');
	for(var j=0; j < current_array.length; j++){
		// do nothing ;D	
	}
	//console.log('Array: ' + i + " =" + current_array_splitted);
	console.log(current_array_splitted);
}



// now building a big,big array ?

var lines_total = 16;
var columns_total = 14;
var big_big_array = [];

for(var i=0; i < lines_total; i++){
	var current_line_array = [];
	for(var j=0; j < columns_total; j++){
		// var current_glyph = 'o';
		// var current_glyph = '\033' + '[1;36m' +'o' + '\033' + '[1;0m'; // COLORED VERSION
		var current_glyph = '\033' + '[1;36m' + getRandomGlyphValue() + '\033' + '[1;0m'; // RANDOMISED COLORED VERSION
		current_line_array.push(current_glyph);
	}
	big_big_array.push(current_line_array);
}

// .. and then display it
console.log('');

for(var i=0; i < big_big_array.length; i++){
	var current_array = big_big_array[i];
	var current_array_splitted = current_array.join('  ');
	for(var j=0; j < current_array.length; j++){
		// do nothing ;D	
	}
	//console.log('Array: ' + i + " =" + current_array_splitted);
	console.log(current_array_splitted);
}

// and, well, then mix it ! ;D

for(var i=0; i < my_big_array.length; i++){
	var current_array = my_big_array[i]; // that is the ORIGINAL array , CAREFUl !!!!!
	//var new_current_array = big_big_array[i]; // hehe ;p -> ont used ;D
	for(var j=0; j < current_array.length; j++){ // we use the length of the ORIGINAL array, CAREFUL !!!!!
		// var current_glyph = my_big_array[i][j];
		var current_glyph = '\033' + '[1;35m' + my_big_array[i][j] + '\033' + '[1;0m'; // hehe *bis ;D // COLORED VERSION
		big_big_array[i][j] = current_glyph; // set the glyph FROM the ORIGINAL array TO the 'big big one' ;D
	}
}

// ... and then display the result of the mix

console.log('');

for(var i=0; i < big_big_array.length; i++){
	var current_array = big_big_array[i];
	var current_array_splitted = current_array.join('  ');
	for(var j=0; j < current_array.length; j++){
		// do nothing ;D	
	}
	//console.log('Array: ' + i + " =" + current_array_splitted);
	console.log(current_array_splitted);
}