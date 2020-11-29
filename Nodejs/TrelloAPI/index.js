'use strict';   // codeの厳格化

const TrelloAPI = require('./Trello/TrelloAPI.js');

// Trello API を使用するために必要
// https://qiita.com/RYOSUKE310/items/016549922a17376efdf8
const key = '9903946b5f7184a163ec49d0a49a9196';
const token = 'ba5cc7c4c6ea52f05b517527f8f3d71d40c5150d9e8340799a6371e80c9dbecf';
const username = 'keit0728';
TrelloAPI.Init(key, token, username);

// ボードリストを取得してコンソールに出力
TrelloAPI.GetBoardList((boardList) => {
    console.log(JSON.stringify(boardList));
});