const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

// Подключаемся к серверу
mongoClient.connect(function (err, client) {

    // обращаемся к базе данных admin
    const db = client.db("code_geass");
    var collection = db.collection("heroes");
    collection.insertOne({ name: "Lelouch" }, function (err, result) {
        client.close();
    })
})