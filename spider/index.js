const User = require('./db/user'),
      extract = require('./extract')(),
      url = ['https://www.zhihu.com/people/zhuan-shen-fan-sha/followers?page=1',
            'https://www.zhihu.com/people/warfalcon/followers?page=1',
            'https://www.zhihu.com/people/zhi-shi-jiu-shi-li-liang-13/followers?page=1',
            'https://www.zhihu.com/people/gmf8541/followers?page=1'];
process.on('message',function(m){
    setTimeout(()=>{
        extract.getUrlList(url[m.num],m.num);
    },Number(m.num)*1000)
})
