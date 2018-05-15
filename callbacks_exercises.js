function add(x, y, callback) {
    setTimeout(function() {
        var result = x + y;
        callback(result);
    }, 1000);
  }

add(1, 2, function (result) {console.log(result); });

function subtract(x, y, callback) {
    setTimeout(function() {
        var result = x - y;
        callback(result);
    }, 1000);
  }

subtract(1, 2, function (result) {console.log(result); });

function greeting(person) {
    setTimeout(function() {
        console.log('Hola, ' + person + '!');    
    }, 1000);
}

function getUserInput(firstName, lastName, callback) {
    var fullName = firstName + " " + lastName;
    if(typeof callback === "function") {
        callback(fullName);
    }
}

getUserInput("Nick", "Schmidt", greeting);

function product(numbers, callback) {
    setTimeout(function() {
        var myProduct = numbers.reduce(function(a, b) {
            return a * b;
        }, 1);
        callback(myProduct)
    }, 1000);
}
product([1, 2, 3, 4, 5], function(myProduct) {console.log(myProduct); });
