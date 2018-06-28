const path = require('path');
const newFunction = require('./newFunction');

module.exports = function(plop) {
	plop.setGenerator('new-function', newFunction);
};
