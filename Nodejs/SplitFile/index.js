'use strict';   // 処理を厳格にする

// モジュール読み込み
const fs = require('graceful-fs');      // ERROR:Too many open filesを回避できるfs
                                        // 参考(http://dotnsf.blog.jp/archives/1064268194.html)
const readline = require('readline');

const originFilePath = './_tmp/じょうしょうたん6.txt';
// const originFilePath = './_tmp/test.txt';
// const createFilePath = './_tmp/Bunkatsu/dest.txt';
const createFilePath = './_tmp/Bunkatsu/dest';
const extension = '.txt';

const lineLimit = 100000;
let n = 0;
let tmpN = 0;
let dataBuf = '';

const rs = fs.createReadStream(originFilePath, 'utf8');
const rl = readline.createInterface(rs, {});

rl.on('line', chunk => {

    dataBuf = `${dataBuf}${chunk}\n`;
    n++;

    if (n == lineLimit) {
        tmpN = tmpN + n;
        let dest = fs.createWriteStream(`${createFilePath}-${tmpN/n}${extension}`, 'utf8');
        dest.write(dataBuf);
        n = 0;
        dataBuf = '';
    }
});
