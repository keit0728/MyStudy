/**
 * Project Name : BunkatsuKun
 * 
 * @author      Keit-oDama
 * @date        Dec 14, 2020
 * @description エントリーポイント
 * 
 */

'use strict';   // 処理を厳格にする

// モジュール読み込み
const fs = require('graceful-fs');      // ERROR:Too many open filesを回避できるfs / 参考(http://dotnsf.blog.jp/archives/1064268194.html)
const readline = require('readline');
const fileOperation = require('./file-operation/file-operation.js');
const message = require('./message/message.js');
const propertiesReader = require('properties-reader');


// 設定ファイル読み込み
const properties = propertiesReader('./settings.ini');
const lineLimit = properties.get('settings.lineLimit');


// ファイルリスト取得
let fileList = fileOperation.getFilePath(__dirname);
// let fileList = fileOperation.getFilePath(`${__dirname}\\_test`);
fileList = fileList.filter(fileName => fileName.match(/.+\.(csv|txt)/gi));


// ファイルが存在しなければ終了
if (0 === fileList.length) {
    throw new Error(message.NO_SPLITTABLE_FILES_FOUND);
}


// ファイル分割
for (let i = 0; i < fileList.length; i=(i+1)|0) {
    console.log(`${__dirname}\\${fileList[i]}`);
    fileOperation.splitFile(`${__dirname}\\${fileList[i]}`, lineLimit);
}