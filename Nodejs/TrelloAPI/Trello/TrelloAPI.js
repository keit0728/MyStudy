/**
 * Trello API 操作
 * @author  keito-dama
 * @date    2020/11/30
 */

let https = require('https');
let key = '';
let token = '';
let username = '';

module.exports = {

    /**
     * @desc    Trello API 取得に必要なkey, token, usernameをセット
     * @param   {string} key        API key
     * @param   {string} token      API token
     * @param   {string} username   Trello username
     */
    Init: (key, token, username) => {
        this.key = key;
        this.token = token;
        this.username = username;
    },


    /**
     * @desc    Trelloのボードリストを取得
     * @param {} コールバック関数
     */
    GetBoardList: (callback) => {
        // 上記key等からボード情報を取得するためのURLを発行
        const URL = `https://trello.com/1/members/${this.username}/boards?key=${this.key}&token=${this.token}&fields=name`;

        //指定のURLからボードリストを取得
        const req = https.request(URL, (res) => {
            //WebAPIからjson取得してコンソールに表示
            res.on('data', (chunk) => {
                let boardList = JSON.parse(chunk);
                callback(boardList);
            });
        });
        req.end();
    }

 }