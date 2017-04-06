var fork = require('child_process').fork;
var cpus = require('os').cpus();
console.log('cpus',cpus.length);
for(var i = 0; i < 3; i++){
    fork('./spider/index.js').send({'num':i});
}
