const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient (url, { useUnifiedTopology: true});

// Use connect method to connect to the server
client.connect(function(err){
    assert.equal(null, err);

    console.log('connected successfully to server');

    const db = client.db(dbName);

    insertDocuments(db, function(){
        client.close();
    });
    
});

const insertDocuments = function(db, callback){
    // Get the documents HTMLAllCollection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
     {
         name: "Apple",
         score: 8,
         review: "Great fruit"
     },
     {
         name: "Orange",
         score: 6,
         review: "Kinda sour"
     }, {
         name: "Banana",
         score: 9,
         review: "Great stuff!"
     }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

