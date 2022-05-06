const express = require('express');
const app = express();
// const ObjectID = require('mongodb').ObjectID;
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    (err) => {
        if(err) console.log(err) 
        else console.log("mongdb is connected");
    }
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next();
});

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(3000, function() {
    console.log('listening on 3000')
});

// MongoClient.connect(connectionString, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//     const db = client.db('ember-practice')
//     const foodsCollection = db.collection('foods')
//     const recipesCollection = db.collection('recipes')

//     

//     app.use(bodyParser.urlencoded({ extended: true }))

//     app.use(bodyParser.json());

//     app.listen(3000, function() {
//         console.log('listening on 3000')
//     })
    
//     app.get('/foods', (req, res) => {
//         db.collection('foods').find().toArray()
//         .then(results => {
//            res.json(results)
//         })
//         .catch(error => console.error(error))
//     })

//     app.get('/foods/:id', (req, res) => {
//         const objectId = new ObjectID(req.params.id);
//         console.log(objectId);
//         db.collection('foods').find(objectId).next()
//         .then(results => {
//            res.json(results)
//         })
//         .catch(error => console.error(error))
//     })

//     app.get('/recipes', (req, res) => {
//         db.collection('recipes').find().toArray()
//         .then(results => {
//            res.json(results)
//         })
//         .catch(error => console.error(error))
//     })
    
//     app.post('/foods', (req, res) => {
//         console.log(req.body)
//         foodsCollection.insertOne(req.body)
//         .then(result => {
//             res.send(result)
//         })
//     })

//     app.delete('/foods/:id', (req, res) => {
//         // console.log(req.params.id)
//         // const objectId = new ObjectID(req.params.id);
//         db.collection('foods').deleteOne({ _id: ObjectID(req.params.id) })
//         .then(results => {
//            res.json(results)
//         })
//         .catch(error => console.error(error))
//     })

    

//})