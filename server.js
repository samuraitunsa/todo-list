const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    name: 'session',
    keys: ['surapun'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

const todoRoute = require('./routes/todo');

app.use('/', todoRoute);

app.listen(port, function() {
    console.log(`Server is listening at http://localhost:${port}`);
});