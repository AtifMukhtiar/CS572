const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017");


let dbConnection;

const dbName = "mwa";
const collectionName = "restaurants";

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



}

module.exports = DBConnection;