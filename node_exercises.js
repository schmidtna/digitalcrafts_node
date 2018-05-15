var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var fs = require('fs');

rl.question('Enter a file to read : ', function(answer) {
    fs.readFile(answer, function (error, buffer) {
        if (error) {
            console.error(error.message);
            return;
        }
        var fileData = buffer.toString();
        var upperCase = fileData.toUpperCase();
        console.log('File Data: ' + upperCase);
        rl.close();
    })
});

