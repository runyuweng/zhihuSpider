const User = require('./db/user');

const url = 'https://www.zhihu.com/people/w3cplus/answers';
const request = require('request')
const cheerio = require('cheerio');

var options = {
  url: 'https://www.zhihu.com/people/w3cplus/answers',
};

request(options, function(error, response, body){
  $ = cheerio(body);
})

User.saveUrl();
