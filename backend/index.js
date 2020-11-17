const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use('/user', userRoutes);

app.listen(3000);