/**
 * Project Name : Split File
 * @author  Keit-oDama
 * @date    Dec 12, 2020
 * @description
 * ファイル操作ライブラリ
 */
'use strict';   // 処理を厳格にする
const fs = require('fs');
module.exports = {
    /**
      * @description to get the server configuration
      * @param  {} callback function name
      */
    getFilePath: async (dirpath) => {

        fs.readdir(dirpath, { withFileTypes: true }, (err, dirents) => {
            return dirents;

            // console.log('hello');
        });
        // console.log('hello');



        // fs.readdir(dirpath, {withFileTypes: true}, (err, dirents) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }

        //     // return dirents;
    
        //     for (const dirent of dirents) {

                
        //         const fp2 = path.join(dirpath, dirent.name, dirent.name);
        //         // fs.mkdir(`./_tmp/${dirent.name}`, function (err) {
        //         //     console.log(err);
        //         //     // return;
        //         // });
    
        //         const fp = path.join(dirpath, dirent.name);
        //         if (dirent.isDirectory()) {
        //             showFiles(fp, callback);
        //         } else {
        //             callback(fp);
        //         }
        //     }
        // });
    }
    

}