// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const dboper = require('./operation');
const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://172.17.0.2:27017/test';
// const url = 'localhost:27017';
const dbname = 'conFusion';
const connect = mongoose.connect(url);
connect.then((db) => {

    console.log('Connected correctly to server');

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated test'}
        },{ 
            new: true 
        })
        .exec();
    })
    .then((dish) => {
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        });

        return dish.save();
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

});

// MongoClient.connect(url, 
//     { useNewUrlParser: true },
// ).then((client) => {

//     console.log('Connected correctly to server');

//     const db = client.db(dbname);
//     const collection = db.collection("dishes");
//     dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
//         "dishes")
//     .then((result) => {
//             console.log("Insert Document:\n", result.ops);

//             return dboper.findDocuments(db, "dishes")
//     })
//     .then((docs) => {
//                 console.log("Found Documents:\n", docs);

//                 return dboper.updateDocument(db, { name: "Vadonut" },
//                     { description: "Updated Test" }, "dishes"
//                  )
//     })
//     .then((result) => {
//                 console.log("Updated Document:\n", result.result);

//                 return dboper.findDocuments(db, "dishes")
//     })
//     .then((docs) => {
//                 console.log("Found Updated Documents:\n", docs);
                            
//                 return db.dropCollection("dishes")
//     })
//     .then((result) => {
//                 console.log("Dropped Collection: ", result);

//                 return client.close();
//     })
//     .catch((err) => console.log(err));
// })
// .catch((err) => console.log(err));