//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    rating: 10,
    review: "Peaches are so yummy"
});

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    Score: 6,
    review: "Decent fruit"
});

mango.save();

Person.updateOne({name: "John"}, {favoriteFruit: mango}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document");
    }
});


// const person = new Person ({
//     name: "Amy",
//     Age: 12,
//     favoriteFruit: pineapple
// });

// person.save();

// const kiwi = new Fruit ({
//     name: "kiwi",
//     rating: 10,
//     review: "Best"
// })

// const banana = new Fruit ({
//     name: "Banana",
//     rating: 8,
//     review: "Sweet"
// })

// const orange = new Fruit ({
//     name: "orange",
//     rating: 16,
//     review: "Watery"
// })

//Fruit.insertMany ([kiwi, banana, orange], function(err) {
//   if (err) {
//        console.log(err);
//   } else {
//        console.log("Succeesfully saved all the fruits to fruitsDB");
//  }
// });

Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    } else {
       mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });

    }  
});

// Fruit.updateOne({_id: "62f6741d95c34f080e59519d"}, {name: "Peach"}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document.");
//     }
// });

// Person.deleteMany({name: "John"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log ("Succesfully deleted all the document");
//     }
// });