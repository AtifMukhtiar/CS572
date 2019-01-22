const express = require('express');
const crypto = require('crypto');

const route = express.Router();

const DBConnection = require('../db/DBConnection');
const dbConnection = new DBConnection();

route.get('/', getMessage);

function getMessage(req, res) {

    let cursor = dbConnection.getCollection().find({}).project({_id: 0});
    let decrypted;
    cursor.each(function (err, doc) {
        if (doc != null) {
            const decipher = crypto.createDecipher("aes256", "asaadsaad");
            decrypted = decipher.update(doc.message, 'hex', 'utf8') + decipher.final('utf8');
            console.log(decrypted);
            res.status(200).send(decrypted);
        }
    });
}


module.exports = route;