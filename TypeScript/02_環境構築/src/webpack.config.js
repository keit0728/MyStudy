const path = require('path');

module.exports = {
    entry: {    // エントリーポイントを指定
        bundle: './src/index.ts'
    },
    output: {    // バンドルしたファイルの出力先
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'   // [name]とすることで上のbundleと紐づく。今回はbundle.jsになる。
    },
    resolve: {  // extensionsで指定しておけばimport, exportで名前解決するときに拡張子を書かなくてよくなる
        extensions: ['.ts', '.js']
    },
    devServer: {    // 開発用のサーバー設定
        contentBase: path.join(__dirname, 'dist'),  // ローカルのサーバーが参照する先
        open: true, // ローカルのwebサーバー立ち上げたときに勝手にブラウザが起動する
    },
    module: {
        rules: [    // モジュールに適用するルール
            {
                loader: 'ts-loader',    // loaderをts-loaderに設定
                test: /\.ts$/           // .tsが末尾についているファイルをts-loaderでコンパイルすると設定
            }
        ]
    }
}