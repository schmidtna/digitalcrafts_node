const rp = require('request-promise');

var urls = [
    'https://en.wikipedia.org/wiki/Futures_and_promises',
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Node.js',
    'https://en.wikipedia.org/wiki/Google_Chrome'
  ];
var i;

var urlPromiseArray = urls.map(function (url) {
    return rp(url)
})

// for (i = 0; i < urls.length; i++) {
//     urlPromiseArray.push(rp(urls[i]));
// };

Promise.all(urlPromiseArray).then(function() {
    console.log('Job is done ');
})
    .catch(function (error) {
        console.error('There was an error');
    });





    


    // .then(requestSuccess)
    // .catch(requestError);

    // function requestSuccess (html) {
    // console.log('I got the html and its this many characters: ' + html.length)
    // }

    // function requestError () {
    // console.error("something went wrong requesting !!!")
    // }




// step 1 list of urls
//convert that into a list of promises
//send that list of promises to promise.all