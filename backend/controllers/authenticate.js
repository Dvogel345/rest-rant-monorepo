const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { user } = db

router.post('/', async (req, res) => {
    console.log('IN HERE')
})

module.exports = router