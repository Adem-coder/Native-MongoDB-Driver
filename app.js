const mongoose = require('mongoose');

// connection URL
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Plese check your data entry no name specified"]
      },
    rating:{
        type: Number,
        min: 1,
        max: 10
    },
    review: String
}); 
// mongoose model
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  
    rating:10,
    review: "Peaches are good"
});

fruit.save();

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

// person.save();


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