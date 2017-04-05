const connection = require('./db');

const User = {


    saveUrl:(data)=> {
        const query = connection.query('INSERT IGNORE INTO user SET ?', data, function (error, results, fields) {
          if (error) throw error;
        });
        console.log('insert success');
    },

    getUrl:(current, fn)=>{
        var data;
        const query = connection.query('SELECT user_id,user_url FROM user LIMIT 2 OFFSET ' + current + '; ', function (error, results, fields) {
          if (error) throw error;
          fn(results);
        });
    },


    saveDetail:(data)=> {
        console.log('data:',data);
        connection.query('UPDATE user SET user_intro = :user_intro, user_type = :user_type, user_edu = :user_type, user_company = :user_company, user_profile = :user_profile, user_detail = :user_detail WHERE user_id = :user_id;', data, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
    }


}


module.exports = User;
