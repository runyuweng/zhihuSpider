var fork = require('child_process').fork;
var cpus = require('os').cpus();
for(var i = 0; i < 2; i++){
    fork('./index.js').send({'num':i});
}
