const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('../config/db')

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.use(cors());

const cats = require('../routes/cats');
const dogs = require('../routes/dogs');

app.use('/api/cats', cats)
app.use('/api/dogs', dogs)

//productioon
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))