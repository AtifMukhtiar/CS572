const http = require('http');
const queryString = require('querystring');
const {fork} = require('child_process');
const {promisify} = require('util');
const fs = require('fs');
const {Subject} = require('rxjs');

const server = http.createServer();
const myObserver = new Subject();

myObserver.subscribe(() => {
    server.on('request', requestListener)
        .listen(4000, () => console.log(`server is listening on port 4000`));
});
myObserver.next();


function requestListener(req, res) {

    let queryString = getParams(req).url;
    if (queryString) {
        const fileReading = fork('FileReading.js');
        //readFile(queryString, res);
        fileReading.send(queryString);
        fileReading.on('message', (data) => {
            res.end(data);
            console.log(`Data from Parent : ${data}`);
        });

    } else {
        console.log('bad queryString');
    }
}

function readFile(fileName, res) {
    const readFile = promisify(fs.readFile);
    readFile(`../${fileName}`, {encode: 'utf8'})
        .then((data) => {
            res.write(data);
            res.end();
        })
        .catch((err) => console.log(`ERROR : ${err}`));

}

function getParams(req) {
    let q = req.url.split('?'), result = {};
    if (q.length >= 2) {
        q[1].split('&').forEach((item) => {
            try {
                result[item.split('=')[0]] = item.split('=')[1];
            } catch (e) {
                result[item.split('=')[0]] = '';
            }
        })
    }
    return result;
}// end of getPrams