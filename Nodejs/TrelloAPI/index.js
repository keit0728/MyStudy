'use strict';   // codeの厳格化

const TrelloAPI = require('./Trello/TrelloAPI.js');

// Trello API を使用するために必要
// https://qiita.com/RYOSUKE310/items/016549922a17376efdf8
// ↑を参考に下記を3変数を適宜自分の環境に合わせること
const key = '';
const token = '';
const username = '';

TrelloAPI.Init(key, token, username);

// ボードリストを取得してコンソールに出力
TrelloAPI.GetBoardList((boardList) => {
    console.log(JSON.stringify(boardList));
});