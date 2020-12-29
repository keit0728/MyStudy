'use strict';

const exec = require('child_process').exec;

exec(`${process.argv[2]} ${process.argv[3]}`, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});