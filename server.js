const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const foodRoute = require('./routes/foods');
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
app.use('/api/foods', foodRoute);

app.listen(3000, function() {
    console.log('listening on 3000')
});