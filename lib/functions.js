// todo ...

module.exports.callback = (err, res, r, fields) => {
    let response = {
        callback     : "",
        contextWrites: {}
    };
        
    if(err) {
        response.callback = 'error';

        if(fields) {
            response.contextWrites[r.to] = {
                status_code: 'REQUIRED_FIELDS',
                status_msg: 'Please, check and fill in required fields',
                fields
            }
        } else if(err == 'json') {
            response.contextWrites[r.to] = {
                status_code: 'JSON_VALIDATION',
                status_msg: 'Syntax error. Incorrect input JSON. Please, check fields with JSON input.'
            }
        } else {
            //console.log(err);
            response.contextWrites[r.to] = typeof err === 'object' ? 
            err._response.body.error.message || err.message : err;
        }
    } else {
        response.callback = 'success';
        response.contextWrites[r.to] = r.result;
    }

    res.status(200).send(response);
}

module.exports.clearArgs = function fn(obj, recurse) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] == '') {
            delete obj[i];
        } else if (recurse && typeof obj[i] === 'object') {
            if(JSON.stringify(obj[i]) == '{}') {
                delete obj[i];
            }

            fn(obj[i], true);
        }
    }

    return obj;
}

module.exports.toUnderscore = (str) => 
    str.replace(/\.?([A-Z])/g, 
        (x, y) => "_" + y.toLowerCase()
    ).replace(/^_/, "");
