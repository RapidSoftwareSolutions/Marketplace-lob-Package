const lib = require('../lib/functions');
const request = require('request');

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
		apiKey,
        primaryLine,
        secondaryLine,
        recipient,
        addressCountry,
        city,
        state,
        postalCode,
        to = "to" } = req.body.args;

    if (!apiKey || !addressCountry) {
        lib.callback('Fill in required fields.', res, { to }, ['apiKey','addressCountry']);
        return;
    }

    let options = lib.clearArgs({
        'primary_line': primaryLine,
        'secondary_line': secondaryLine,
        recipient,
        'address_country':addressCountry,
        city,
        state,
        'postal_code':postalCode
    });

    auth = "Basic " + new Buffer(apiKey + ":").toString("base64");


    request({
        url: 'https://api.lob.com/v1/intl_verifications',
        method: 'post',
        form: options,
        headers: {
            "Authorization": auth
        },
    }, (err, response, result) => {
        if (response.statusCode !== 200) {
            err = { '_response': { 'body': { 'error': { 'message': JSON.parse(result).error.message } } } };
            lib.callback(err, res, {});
            return;
        }
        return lib.callback(err, res, { to, 'result': JSON.parse(result) });


    });
}
