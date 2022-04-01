const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { user } = db

router.post('/', async (req, res) => {
    // console.log('IN HERE')
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    console.log(user)
})

module.exports = router