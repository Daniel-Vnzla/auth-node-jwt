const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

const dataBase = require('./db.js');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(cookieParser());

app.use(require('./routes/auth.js'));

app.get('/',(req, res) => res.sendFile('views/home.html', { root: __dirname }))



app.listen(PORT, () => console.log('Server Ready'))