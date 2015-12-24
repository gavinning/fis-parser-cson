var fs = require('fs');
var path = require('path');
var cson = require('cson');

module.exports = function(content, file, conf){
    return JSON.stringify(cson.parse(content.toString('utf-8'), conf.csonConfig));
}
