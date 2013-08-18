var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


server.listen(80);
console.warn(ipaddress);
app.use(express.static(__dirname + '/'));

require('./server/communication').module.init(server);
