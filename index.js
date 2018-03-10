const express = require('express');
const app = express();
const formidable = require('formidable');
const path = require('path');

app.route('/')
    .get((req, res) => res.sendFile(path.resolve(__dirname + '/index.html')))
    .post((req, res) => {
        const form = new formidable.IncomingForm();
        form.parse(req);
        form.on('file', (err, file) => res.json({ size: file.size }));
        form.on('error', (err) => res.send('There was an error parsing the file.'));
    })

app.set('port', process.env.PORT || 5000)

const server = app.listen(app.get('port'), () => console.log('server listening: ' + server.address().port));