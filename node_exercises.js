const readline = require('readline');
const request = require('request');
const fs = require('fs');
const dns = require('dns');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// open a file, convert it to caps, save it out to another file.

rl.question('Enter a file to read : ', function(inputFileName) {
    fs.readFile(inputFileName, function (error, fileContents) {
        if (error) {
            console.error(error.message);
            return;
        }
        var fileTxt = fileContents.toString();
        var fileTxtUpper = fileTxt.toUpperCase();
        fs.writeFile('output.txt', fileTxtUpper, function (error) {
            if (error) {
                console.error(error.message);
                return;
            }
            console.log('File saved: ', 'output.txt');
        })
        rl.close();
    })
});

//dns request

rl.question("Enter domain name: ", function(enterDomainName) {
    dns.lookup(enterDomainName, (err, address, family) => {
        if (err) throw err;
            
        console.log('IP address: %j ', address,);
        rl.close();
    })
});