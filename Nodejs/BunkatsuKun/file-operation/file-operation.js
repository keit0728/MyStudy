/**
 * Project Name : BunkatsuKun
 * @author  Keit-oDama
 * @date    Dec 12, 2020
 * @description
 * ファイル操作ライブラリ
 */
'use strict';   // 処理を厳格にする
const fs = require('fs');
module.exports = {
    /**
     * @description ファイルパスを取得
     * @param  {String} directoryPath フォルダパス
     */
    getFilePath: (directoryPath) => {
        const files= fs.readdirSync(directoryPath);
        return files;
    }
}