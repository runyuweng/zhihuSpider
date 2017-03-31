const User = require('./db/user'),
      extract = require('./extract'),
      url = 'https://www.zhihu.com/people/afc163/followers';

extract.getDetail(url);
extract.getUrl();
