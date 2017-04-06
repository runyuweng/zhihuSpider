const User = require('./db/user'),
      extract = require('./extract')(),
      url = ['https://www.zhihu.com/people/zhuan-shen-fan-sha/followers?page=1',
            'https://www.zhihu.com/people/warfalcon/followers?page=1',
            'https://www.zhihu.com/people/zhi-shi-jiu-shi-li-liang-13/followers?page=1',
            'https://www.zhihu.com/people/gmf8541/followers ?page=1'];
var a = 0;

//获取用户详细信息
// User.getUrl(a, async function next(results){
//     a++;
//     await extract.getDetail(results[0].user_url);
//     User.getUrl(a, next);
// });


process.on('message',function(m){
    extract.getUrlList(url[m.num],m.num);
})
