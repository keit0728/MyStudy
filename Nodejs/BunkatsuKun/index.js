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
const fileOperation = require('./file-operation/file-operation.js');
const message = require('./message/message.js');
const propertiesReader = require('properties-reader');


// 設定ファイル読み込み
const properties = propertiesReader(`${__dirname}\\settings.ini`);
const lineLimit = properties.get('settings.lineLimit');


// ファイルリスト取得
let fileList = fileOperation.getFilePath(__dirname);
fileList = fileList.filter(fileName => fileName.match(/.+\.(csv|txt)/gi));


// ファイルが存在しなければ終了
if (0 === fileList.length) {
    throw new Error(message.NO_SPLITTABLE_FILES_FOUND);
}


// フォルダは除外
fileList = fileOperation.excludeDirectory(fileList);


// ファイル分割
for (let i = 0; i < fileList.length; i=(i+1)|0) {
    console.log(`${__dirname}\\${fileList[i]}`);
    fileOperation.splitFile(`${__dirname}\\${fileList[i]}`, lineLimit);
}