const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {altairExpress} = require('altair-express-middleware');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/altair', altairExpress({
    endpointURL: '/',
    subscriptionsEndpoint: `ws://localhost:3000/subscriptions`
}));

module.exports = app;
