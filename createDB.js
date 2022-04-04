var MongoClient = require("mongodb").MongoClient
MongoClient.connect("mongodb://localhost:27017/all",
    function (err, db) {
        if (err) throw err
        var collection = db.collection("heroes")
        collection.insertOne({ name: "Винни Пух" }, function (err, result) {
            db.close()
        })
    })