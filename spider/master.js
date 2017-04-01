var fork = require('child_process').fork;
var cpus = require('os').cpus();
for(var i = 0; i < 2; i++){
    fork('./spider/index.js').send({'num':i});
}
