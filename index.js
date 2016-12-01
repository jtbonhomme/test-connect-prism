var http = require('http');
var connect = require('connect');
var prism = require('connect-prism');

prism.useVerboseLog();

prism.create({
  name: 'imgages',
  mode: 'record',
  context: '/images',
  host: '192.168.1.10'
});

var app = connect()
  .use(prism.middleware);

http.createServer(app).listen(3000);
