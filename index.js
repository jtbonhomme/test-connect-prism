var http = require('http');
var connect = require('connect');
var prism = require('connect-prism');

prism.useVerboseLog();

prism.create({
  name: 'images',
  mode: 'mockrecord',
  context: '/images',
  host: '192.168.1.10'
//  host: '10.0.0.66'
});


var app = connect()
  .use(prism.middleware);

http.createServer(app).listen(3000);
