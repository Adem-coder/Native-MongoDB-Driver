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

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to fruitsDB");
//     }
// });

Fruit.find(function(err, fruits){
    
    if (err){
        console.log(err);

    mongoose.connection.close();

    }else{
        console.log(fruits);
    
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
}
});