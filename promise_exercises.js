const rp = require('request-promise');
const fse = require('fs-extra');

// var urls = [
//     'https://en.wikipedia.org/wiki/Futures_and_promises',
//     'https://en.wikipedia.org/wiki/Continuation-passing_style',
//     'https://en.wikipedia.org/wiki/JavaScript',
//     'https://en.wikipedia.org/wiki/Node.js',
//     'https://en.wikipedia.org/wiki/Google_Chrome'
//   ];
// var i;

// var urlPromiseArray = urls.map(function (url) {
//     return rp(url)
// })


// Promise.all(urlPromiseArray).then(function() {
//     console.log('Job is done ');
// })
//     .catch(function (error) {
//         console.error('There was an error');
//     });

//ex 2
function saveWebPage(url, filename) {
    return new Promise((resolve, reject) => {
        urlGrab = rp(url)
        resolve(urlGrab);
        console.log('URL grabbed successfully : ' + url)
    })
    .then(function (){
        fse.writeFile(filename, )
    })
}

saveWebPage('https://google.com', 'test.txt')