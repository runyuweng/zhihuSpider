const User = require('./db/user'),
      extract = require('./extract')(),
      url = 'https://www.zhihu.com/people/afc163/followers?page=1';
      url1 = 'https://www.zhihu.com/people/weng-run-yu/followers?page=1';

// extract.getDetail(url);
extract.getUrlList(url);
// User.saveUrl();
