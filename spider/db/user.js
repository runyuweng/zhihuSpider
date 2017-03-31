const connection = require('./db');

const User = {


    saveUrl:(data)=> {
        const query = connection.query('INSERT IGNORE INTO user SET ?', data, function (error, results, fields) {
          if (error) throw error;
        });
        console.log('insert success');
    },


    saveDetail:()=> {
        console.log('this is save detail');
    }


}


module.exports = User;
