var http = require('http');
var fs = require('fs');
var {promisify} = require('util');
var server = http.createServer();
var server2 = http.createServer();
var server3 = http.createServer();

server.on('request', function (req, res) {
    console.log('before reading');
    const readFile = promisify(fs.readFile);
    readFile('./file.txt', {encode: 'utf8'})
        .then((data) => {
            res.write(data)
            console.log(data)
        })
        .catch((err) => console.log(err));
    console.log('after reading');

});

server2.on('request', function (req, res) {
    console.log('before reading');
    const readFileSync = promisify(fs.readFileSync);
    readFileSync('./file.txt', {encode: 'utf8'})
        .then((data) => {
            res.write(data)
            console.log(data);
        })
        .catch((err) => console.log(err));
    console.log('after reading');

});

server3.on('request', function (req, res) {
    console.log('started reading');
    var rs = fs.createReadStream('./file.txt').pipe(res);
    console.log('after reading');


});

// server.listen(4000, () => console.log(`listening on the port 4000`));
server2.listen(4001, () => console.log(`listening on the port 4001`));
// server3.listen(4002, () => console.log(`listening on the port 4002`));