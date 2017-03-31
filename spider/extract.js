const phantom = require('phantom'),
      cheerio = require('cheerio');
function extract(){};

extract.getDetail = async (url)=>{
    const instance = await phantom.create();
    const page = await instance.createPage();
    //等待页面加载完成
    await page.on("onLoadFinished", function(status) {
        console.log('Status: ' + status);
    });
    const status = await page.open(url);
    //模拟点击展开事件
    page.evaluate(function() {
    var btn = document.getElementsByClassName('ProfileHeader-expandButton')[0];
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0 );
    btn.dispatchEvent( event );
    })
    //获取到页面
    const content = await page.property('content');
    // 使用cheerio解析页面
    const $ = cheerio.load(content);
    // $('.Button.ProfileHeader-expandButton.Button--plain').click();
    let user = {
        'name' : $('.ProfileHeader-name').text(),
        'intro' : $('.RichText.ProfileHeader-headline').text(),
        'type' : $('.ProfileHeader-infoItem').eq(0).text(),
        'edu' : $('.ProfileHeader-infoItem').eq(1).text(),
        'company' : $('.ProfileHeader-field').eq(0).text(),
        'profile' : $('.RichText.ProfileHeader-detailValue').eq(0).text()
    };
    console.log(user);
};


extract.getUrl = ()=>{
    console.log('this is getUrl');
};

module.exports = extract;

module.exports = extract;
