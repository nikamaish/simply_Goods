const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/', (req, res) => {
    res.send('It works!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MDB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Connection Error:', err.message);
});

db.once('open', () => {
    console.log('Connected to the database');
});

app.use('/auth', require('./routers/userRouter'));
