var {promisify} = require('util');
var fs = require('fs');
process.on('message', (fileName) => {

    const content = fs.readFileSync(`../${fileName}`, 'utf8');
    process.send(content);

});

