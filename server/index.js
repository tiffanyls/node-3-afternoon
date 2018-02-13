require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(session({
    session: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log("Server listening on port ${port}.")});
