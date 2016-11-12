const lib     = require('../lib/functions');
const Lob     = require('lob');
const request = require('request');

module.exports = (req, res) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		apiKey,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey) {
		lib.callback('Fill in required fields.', res, {to}, ['apiKey']);
    	return;
	}

	let client = Lob(apiKey);
	
	return client.states.list((err, result) => {
	  	if(err) {
			lib.callback(err, res, {to: to});
			return;
		}

		lib.callback(null, res, {to, result});
	});
}