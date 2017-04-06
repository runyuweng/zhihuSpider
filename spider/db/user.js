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
        const query = 'UPDATE user SET user_intro = "'+data.user_intro+'", user_type = "'+data.user_type+'", user_edu = "'+data.user_type+'", user_company = "'+data.user_company+'", user_profile = "'+data.user_profile+'", user_detail = "'+data.user_detail+'" WHERE user_id = "'+data.user_id+'";';
        console.log(query);
        console.log('\n\n');
        connection.query(query, function (error, results, fields) {
            if (error) throw error;
        });
    }


}


module.exports = User;
