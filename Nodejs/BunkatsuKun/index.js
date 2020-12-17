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
const fs = require('fs');

const path = require('path');


// コマンドライン引数から分割したいファイルのパスを取得
let filePath = process.argv[2];
filePath = "D:\\MyStudy\\Nodejs\\BunkatsuKun\\_test\\test.txt";


// ファイルが存在しなければ終了
if (typeof filePath === "undefined") {
    throw new Error(message.NO_SPLITTABLE_FILES_FOUND);
}


// 対象外のファイルなら終了
const extention = path.extname(filePath);
const regex = /.txt|.csv/gi;
if (!regex.test(extention)) {
    throw new Error(message.OUT_OF_TARGET_FILES);
}


// 設定ファイル読み込み
if (!fs.existsSync(`${__dirname}\\settings.ini`)) {
    throw new Error(message.NOT_FOUND_SETTINGFILES);
}
const properties = propertiesReader(`${__dirname}\\settings.ini`);
const lineLimit = properties.get('settings.lineLimit');


// ファイル分割
console.log(filePath);
fileOperation.splitFile(filePath, lineLimit);