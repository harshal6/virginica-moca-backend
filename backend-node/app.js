var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

console.log('********CONFIG*******')
console.log(`API URL : 'https://api.neoncrm.com/v2'`);
console.log("Host : localhost");
console.log("PORT : 3000")
console.log(`${process.env.PAYMENT_PUBLIC_KEY}`)
console.log(`${process.env.PAYMENT_MERCHANT_ID}`)
console.log(`${process.env.PAYMENT_APP_ID}`)
console.log(`-------------Email------------`)
console.log(process.env.EMAIL)
console.log(`${process.env.PASSWORD}`)
console.log(`${process.env.EMAIL_SERVICE}`)
app.use('/api', indexRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listeitng in port ${process.env.PORT}`);
})