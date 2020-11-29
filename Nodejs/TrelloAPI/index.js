'use strict';   // codeの厳格化

let https = require('https');
let URL = '';

// Trello API を使用するために必要
// https://qiita.com/RYOSUKE310/items/016549922a17376efdf8
const key = '9903946b5f7184a163ec49d0a49a9196';
const token = 'ba5cc7c4c6ea52f05b517527f8f3d71d40c5150d9e8340799a6371e80c9dbecf';
const username = 'keit0728';

// 上記key等からボード情報を取得するためのURLを発行
URL = `https://trello.com/1/members/${username}/boards?key=${key}&token=${token}&fields=name`;

//指定のURLからデータ取得
const req = https.request(URL, (res) => {
    //WebAPIからjson取得してコンソールに表示
    res.on('data', (chunk) => {
        let board = JSON.parse(chunk);
        console.log(JSON.stringify(board));
    });

    //取得完了をコンソールに表示
    res.on('end', () => {
        console.log('JSONデータは以上です。');
    });

});

req.end();