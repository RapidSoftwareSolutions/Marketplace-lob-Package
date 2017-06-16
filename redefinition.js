var datetime = require('node-datetime');

var override = function(args) {

    if(args.metadata != undefined && typeof args.metadata=="object"){
        let metadataArr = {};
        let metadata = args.metadata;
        for (var i in metadata) {
            metadataArr[metadata[i]['key']] = metadata[i]['value'];
        }
        args.metadata = metadataArr;
    }

    return args;
};
module.exports.override = override;