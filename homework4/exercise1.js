const os = require('os');
const {Subject} = require('rxjs');
let cpusObj = os.cpus();

let observer = new Subject();
observer.subscribe(checkSystem());

function checkSystem() {
    if (cpusObj.length > 2) {
        let totalmemory = os.totalmem / 1024 / 1024;
        if (totalmemory > 4096) {
            console.log(`checked successfully`);
        } else {
            console.log(`This app needs atleast 4 gb of RAM`);
        }
    } else {
        console.log(`Processor is not supported`);
    }
}

observer.next();