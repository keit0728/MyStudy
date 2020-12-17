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


// コマンドライン引数から分割したいファイルのパスを取得
let filePath = process.argv[2];


// ファイルが存在しなければ終了
if (typeof filePath === "undefined") {
    throw new Error(message.NO_SPLITTABLE_FILES_FOUND);
}


// ファイル分割
console.log(file);
fileOperation.splitFile(file, lineLimit);