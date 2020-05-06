const express = require('express');
var bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const user = require('./routes/user.route'); // Imports routes for the products
const app = express();
const jwt = require("jsonwebtoken");

app.use('/products', product);
app.use('/user', user);

// Set up mongoose connection
const mongoose = require('mongoose');

// connect db đây a
let dev_db_url = 'mongodb://localhost:27017';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true, dbName: 'dungcc' });
mongoose.connection.on('error', err => {
    console.log(err);
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

// app.use(bodyParser.raw({
//     inflate: true,
//     limit: '100kb',
//     type: 'application/octet-stream'
// }));

app.use(bodyParser.urlencoded({ extended: false }));

let port = 3001;
app.listen(port, () => {
    console.log('Server is up and running   port numner ' + port);
});

