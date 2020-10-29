const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('env').config();

const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect('')

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.json());

app.get('/',(req, res) => res.sendFile('views/home.html', { root: __dirname }))
app.listen(PORT, () => console.log('Server Ready'))