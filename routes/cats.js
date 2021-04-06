const express = require('express')
const mongodb = require('mongodb')
const Cats = require('../model/Cats')

const router = express.Router();


router.get('/', async(req, res) => {
    try {
        const cats = await Cats.find().sort('date').select('-_id').select('-__v').select('-date')

        res.json(cats)
    } catch (err) {
        res.status(500).send('Server Errror')
    }


})

router.post('/', async(req, res) => {

    const {name, species, age} = req.body

    try {
        const newCat = new Cats({
            name,
            species,
            age
        })

        const cats = await newCat.save();
        res.json(cats)
    } catch (err) {
        res.status(500).send('Server error')
    }
})

/*async function loadcatscollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://adeoluwa1:adeoluwa1@vue.9z0bs.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )

    return client.db('vue_express').collection('cats')
}*/


module.exports = router;