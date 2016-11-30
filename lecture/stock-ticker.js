//require in events
var EventEmitter = require('events');


//instance of event emitter
var stockTicker = new EventEmitter();

// Using event emitters in Node.
(function () {

    var randomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var companies = ['MSFT', 'GOOG', 'YHO', 'APP'];

    setInterval(function () {
        var company = randomElement(companies);
        var newRating = Math.random();
        //emit that socket
        stockTicker.emit('stockChange', {
        	company: company,
        	rating: newRating 
        })
    }, 500);







})();

module.exports = stockTicker;