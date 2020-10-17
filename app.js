const mongoose = require('mongoose');

// connection URL
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
}); 
// mongoose model
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
    
}); 
// mongoose model
const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37
    
});

person.save();

const kiwi = new Fruit ({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});
const banana = new Fruit({
    name: "Banana",
    score: 7,
    review: "Has a smooth feeling"
});
const orange = new Fruit({
    name: "Orange",
    score: 6,
    review: "Better than most"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully saved all the fruits to fruitsDB");
    }
});

const findDocuments = function(db, callback){
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};