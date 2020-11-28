let https = require('https');
const URL = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=1450076';

//指定のURLからデータ取得
const req = https.request(URL, (res) => {
    //WebAPIからjson取得してコンソールに表示
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });

    //取得完了をコンソールに表示
    res.on('end', () => {
        console.log('JSONデータは以上です。');
    });

});