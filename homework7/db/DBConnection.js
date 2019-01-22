const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017");

const crypto = require('crypto');

let dbConnection;

const dbName = "mwa";
const collectionName = "homework7";

class DBConnection {
    constructor() {
        this.createConnection();
    }

    createConnection() {

        client.connect(function (err) {
            if (err) throw err;
            dbConnection = client.db(dbName);
            console.log("Connected with mongoDB!");
        });
    }// end of connection

    getCollection() {
        return dbConnection.collection(collectionName);
    }


    createCollections(collectionName) {
        dbConnection.createCollection(collectionName, function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
        });
    }


    inserDocument(document) {
        dbConnection.collection(collectionName).insertOne(document, function (err, res) {
            if (err) throw err;
            console.log("Inserted Document");
        });
        console.log("Inserted After call")
    }

    getDocument() {
        let cursor = dbConnection.collection(collectionName).find({}).project({_id: 0});
        let decrypted;
        cursor.each(function (err, doc) {
            if (doc != null) {
                const decipher = crypto.createDecipher("aes256", "asaadsaad");
                decrypted = decipher.update(doc.message, 'hex', 'utf8') + decipher.final('utf8');
                console.log(`here`);
            }
        });
        return decrypted;
    }


}

module.exports = DBConnection;