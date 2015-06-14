var terminal = require('child_process').spawn('bash');
 
terminal.stdout.on('data', function(data){
	console.log('stdout: ' + data);
});

terminal.on('exit', function(code){
	console.log('the process ended with exit code: ' + code);
});

setTimeout(function(){
	console.log('sending stdin to the terminal');
	terminal.stdin.write('echo "Hello $USER"');
	terminal.stdin.end();
}, 1000);