const express = require('express');
const routes = require('./routes/index');

// create our Express app
const app = express();

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

// done! we export it so we can start the site in start.js
module.exports = app;