//require
var stockTicker = require('./stock-ticker.js')

stockTicker.on('stockChange', function(data) {
	console.log('NEW RATING')
})
//on
stockTicker.on('stockChange', function(data) {
	console.log('Company: ', data.company)
	console.log('Rating: ', data.rating)
})

stockTicker.on('stockChange', function(data) {
	console.log('OH the stock market is changing');
})