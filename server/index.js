require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const swag_controller = require('./controllers/swag_controllers');

const app = express();

app.use(bodyParser.json());
app.use(session({
    session: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);

app.get('/api/swag', swag_controller.read);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log("Server listening on port ${port}.")});
