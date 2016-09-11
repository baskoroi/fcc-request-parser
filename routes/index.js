'use strict';

var get_ip = require('ipware')().get_ip;
var useragent = require('useragent');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('To use this microservice, append `/whoami` in the URL.');
    });

    app.get('/whoami', function(req, res) {
        var ipaddress = get_ip(req).clientIp;

        var language = req.get('accept-language');
        language = language.slice(0, language.indexOf(','));

        var os = useragent.parse(req.headers['user-agent']).toString();

        res.json({
            ipaddress: ipaddress,
            language: language,
            os: os
        });
    });
}