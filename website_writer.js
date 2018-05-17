var request = require('request');
var fs = require('fs');

var filename = 'css-tricks.html';
saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});