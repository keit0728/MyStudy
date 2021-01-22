# 環境構築
基本は自動構築だが、実務で扱っているとなんだかんだ触らなきゃいけない機会がある。自分で設定できるようになっとくとよい。特に下記は必須。
- webpack
- tsconfig

# <img src="./images/webpack.png" width=6%>webpack
依存関係を考慮しながらJavaScriptを1ファイルにまとめる（こういうのをモジュールハンドラという）。
<img src="./images/ビルドの仕組み.png" width=80%>


# tsconfig
TypeScriptの設定ファイル。これを適切に変更することで、新しい構文で書いたものを古いブラウザでも動くようにできる。

# ハンズオン

## nodeインストール確認
まずはnodeがインストールされていることを確認する。下記コマンドでバージョンが表示されなければインストールされていない。

```console:
node -v
```

## package.jsonファイル作成
package.jsonファイルを作成する。

```console:
npm init -y
```

## 関連パッケージインストール
関連パッケージをインストールする。開発環境でしか利用しないパッケージなので `--save-dev` をつける。これでユーザーが利用したいときに `npm install` で含まれなくなる。

```console:
npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server
```

各パッケージの役割は下記の通り。
<img src="./images/各パッケージの役割は？.png" width=80%>

## webpackの設定
webpackの設定ファイルを作成する。新規ファイル作成で`webpack.config.js`を作成する。間違えるとうまくいかないので注意（`webpack.config.js`のコードは`src`フォルダ参照）。

## `package.json`を設定
`package.json`を設定する。<br>
"script"をいじる。ここで"build"とか追加すると`npm build`で追加した内容を実行できる。<br>
`"bulid": "webpack --mode=production"` -> webpackを使って本番用の環境をビルドする
`"start": "webpack-cli server --mode development"` -> 開発環境のwebサーバーを起動

# 参考
https://youtu.be/qSHlXcSces8