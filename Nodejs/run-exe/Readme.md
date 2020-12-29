# run-exe
[child_process](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)でexeをコード上で実行するサンプルです。

# DEMO
CLI（例:Windowsなら`cmd.exe`）上で下記を実行。

```console
node index.js <実行したいexe> <引数1>
```

例えば、渡した外部引数をそのまま返す`myecho.exe`があったとします。

```console
myecho.exe <引数1>
<引数1>     //引数1が表示される
```

それを本サンプルコードで実行するには下記の通り。

```console
node index.js myecho.exe HelloNodejs!!!
HelloNodejs!!!
```

# Author
@autor:     KeitoDama<br>
@e-mail:    [keit0728.free@gmail.com](mailto:keit0728.free@gmail.com)

# License
"run-exe" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).