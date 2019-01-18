const {resolve4} = require('dns');
const {promisify} = require('util');


function returnPromise() {
    return new Promise(function (resolve, failure) {
        resolve4("www.mum.edu", function (err, address) {
            resolve(address)
        })
    });
}

function resolveUsingPromise() {
    let promise = returnPromise();

    promise.then(function (data) {
        console.log(`Promise : ${data}`)
    }).catch(err => console.log(err))

    let stat = promisify(resolve4);
    stat("www.mum.edu").then(function (value) {
        console.log(`Promisify : ${value}`)
    }).catch(err => console.log(err));
}

async function usingAsyncWait() {
    try {
        let result = await returnPromise();
        console.log(`async wait : ${result}`)
    } catch (err) {
        console.log(err)
    }
}


resolveUsingPromise();
usingAsyncWait();

resolve4("www.mum.edu", function (err, addresses) {
    console.log(`Addresses : ${addresses}`)
});
