'use strict';   // 処理を厳格にする

// モジュール読み込み
const fs = require('graceful-fs');      // ERROR:Too many open filesを回避できるfs / 参考(http://dotnsf.blog.jp/archives/1064268194.html)
const readline = require('readline');
const fileOperation = require('./file-operation/file-operation.js');
const message = require('./message/message.js');
const propertiesReader = require('properties-reader');
// const splitFile = require('./split-file/split-file.js');


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



// console.log(filePath);

















// // const originFilePath = './_tmp/じょうしょうたん6.txt';
// const originFilePath = './_tmp/test.txt';
// // const createFilePath = './_tmp/Bunkatsu/dest.txt';
// const createFilePath = './_tmp/Bunkatsu/dest';




// const extension = '.txt';

// const lineLimit = 10;
// let n = 0;
// let tmpN = 0;
// let dataBuf = '';

// const rs = fs.createReadStream(originFilePath, 'utf8');
// const rl = readline.createInterface(rs, {});

// // 1行ずつ読み込み＆lineLimitだけ読み込んだら書き込み
// rl.on('line', chunk => {
//     dataBuf = `${dataBuf}${chunk}\n`;
//     n++;
//     if (n == lineLimit) {
//         tmpN = tmpN + n;
//         let dest = fs.createWriteStream(`${createFilePath}-${tmpN/lineLimit}${extension}`, 'utf8');
//         dest.write(dataBuf);
//         n = 0;
//         dataBuf = '';
//     }
// });

// // 最終行に到達したら最後に溜まっているdataを吐き出して終了
// rl.on('close', () => {
//     let dest = fs.createWriteStream(`${createFilePath}-${(tmpN/lineLimit)+1}${extension}`, 'utf8');
//     dest.write(dataBuf);
//     n = 0;
//     dataBuf = '';
//     // console.log('end');
// });



// function getFileName() {

// }