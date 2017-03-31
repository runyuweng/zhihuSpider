var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '115.159.85.254',
  user     : 'root',
  password : 'WW593110501',
  database : 'zhihu'
});

module.exports = connection;
