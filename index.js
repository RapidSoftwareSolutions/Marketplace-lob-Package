'use strict';

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs'),
    path            = require('path'),
    Lob             = require('lob'),
    lib             = require('./lib/functions'),
    specification   = JSON.parse(fs.readFileSync(path.join(__dirname, "specification.json"), "utf8")),
    files           = fs.readdirSync('api/'),
    routes          = [];

const PORT          = process.env.PORT || 8080;
global.PACKAGE_NAME = "Lob";

const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

for (let file in files) {
	file = files[file];
    try {
        var type    = file.substring(file.lastIndexOf('.') + 1),
            route   = file.substring(0, file.length - type.length - 1);

       if(!type == 'js' || file == 'metadata.js') continue;

       app.post(`/api/${PACKAGE_NAME}/${route}`, require(`./api/${file}`));
       routes.push(route);

    } catch(e) { 
    	console.log(e); 
    	continue;
    }
};

let optHash = {
	'card_from'  : 'from',
	'card_to'    : 'to',
	'letter_to'  : 'to',
	'letter_from': 'from',
	'check_to'   : 'to',
	'check_from' : 'from'
}

for(let spec in specification) {
	if(!!(routes.indexOf(spec) + 1)) continue;

	let methodSections = specification[spec].section,
		methodName     = specification[spec].name;

	app.post(`/api/${PACKAGE_NAME}/${spec}`, (req, res) => {
		req.body.args = lib.clearArgs(req.body.args);

		let to       = req.body.args.to || "to",
			options  = {},
			client;

        if(!req.body.args.apiKey) {
        	lib.callback(`Error: Fill in required fields to use the ${PACKAGE_NAME}.`, res, {to});
        	return;
        }

        client = Lob(req.body.args.apiKey);
        delete req.body.args.apiKey;

		for(let key in req.body.args) {
            let optkey = lib.toUnderscore(key);

            if(specification[spec].keys[key] == "JSON") {
            	try {
            		req.body.args[key] = JSON.parse(req.body.args[key]);
            	} catch(e) {
            		lib.callback(`Error in parsing JSON field.`, res, {to});
    				return;
            	}
            }

            if(req.body.args[key]) {
                options[optHash[optkey] || optkey] = req.body.args[key];
            }
        }

        if(typeof client[methodSections][methodName] === 'function') { 
        	if(/delete|retrieve/.test(methodName)) {
        		for (var opt in options) break; options = options[opt];

        		if(!options) {
        			lib.callback('Fill in required fields.', res, {to});
    				return;
        		}
        	}

    		client[methodSections][methodName](options, (err, result) => {
    			if(err) {
    				lib.callback(err, res, {to: to});
    				return;
    			}

    			lib.callback(null, res, {to, result});
    		});
        } else {
        	console.log('Something went wrong: ', methodSections, methodName, spec);
        }

	});
}

app.listen(PORT);
module.exports = app;

