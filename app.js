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

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
    
}); 
// mongoose model
const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name: "pineapple",
//     score: 9,
//     review: "Great fruit"
// });
// // pineapple.save();

// const person = new Person ({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple
    
// });

// person.save();

const mango = new Fruit({
    name: "mango",
    score: 10,
    review: "Great"
});
mango.save();

const person = new Person ({
    name: "John",
    age: 37,
    favoriteFruit: mango
    
});

person.save();


Fruit.find(function(err, fruits){
    
    if (err){
        console.log(err);

        mongoose.connection.close()

    }else{
        console.log(fruits);
    
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
}
});
// Fruit.updateOne({_id:"5f8c059ea62f7c43788672dd"}, { name: "Peach"}, function(err){
//     if (err) {
//         console.log(err);
//     } else{
//         console.log("Successfull");
//     }

// });
// Fruit.deleteOne({name: "Peach"}, function(err){
//     if (err){
//         console.log(err);   
//     } else{
//         console.log("Successfully deketed");
//     }
// });
// Person.deleteMany({name: "John"}, function(err){
//     if (err){
//         console.log(err);
//     } else{
//         console.log("Deleted");
//     }
// });