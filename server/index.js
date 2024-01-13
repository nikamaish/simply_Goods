const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


app.use(express.json());


const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  


// app.get('/', (req, res) => {
//     res.send('It works!');
// });

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


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', require('./routers/userRouter'));
