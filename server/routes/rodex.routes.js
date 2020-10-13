const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Dni = require('../models/dni.model')


// Endpoints



router.get('/historic', (req, res) => {

    Dni.find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/historic/:_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params._id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Dni.findById(req.params._id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/savedoc', (req, res, next) => {

    Dni.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editdoc/:_id', (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params._id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Dni.findByIdAndUpdate(req.params._id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router