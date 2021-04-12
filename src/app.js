'use strict';

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

mongoose.connect(config.connectionString, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
 
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');


app.use(express.json({
    limit: '5mb'
}));
app.use(express.urlencoded({ 
   extended: true
}));


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;