const lib     = require('../lib/functions');
const Lob     = require('lob');
const request = require('request');

module.exports = (req, res) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		apiKey,
		bankAccountId,
		amounts,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !bankAccountId) {
		lib.callback('Fill in required fields.', res, {to}, ['apiKey', 'bankAccountId']);
    	return;
	}

	try{
		if(typeof amounts == 'string') amounts = JSON.parse(amounts); 
	} catch(e) {
		lib.callback(`Error in parsing JSON field.`, res, {to});
    	return;
	}

	let client = Lob(apiKey);
	
	return client.bankAccounts.verify(bankAccountId, {
	  	amounts: amounts
	}, (err, result) => {
	  	if(err) {
			lib.callback(err, res, {to: to});
			return;
		}

		lib.callback(null, res, {to, result});
	});
}