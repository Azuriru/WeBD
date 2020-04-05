const fs = require('fs');
const path = require('path');
const express = require('express');
const minify = require('express-minify');
const compression = require('compression');
const app = express();

app
    // .use(minify())
    // .use(compression())
    .use(express.static('static'));

app.get('/:index', (req, res, next) => {
    const file = path.join(__dirname, 'static', req.params.team + '.html');
    fs.exists(file, exists => {
        if (exists) {
            res.charset = 'utf8';
            fs.createReadStream(file).pipe(res);
        } else {
            next();
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.use((req, res) => {
    res.redirect('/');
});

app.listen(process.env.PORT || 5000);