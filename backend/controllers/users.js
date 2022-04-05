const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
<<<<<<< HEAD
    let { password, ...rest} = req.body;
    const user = await User.create({
    ...rest,
    passwordDigest: await bcrypt.hash(password, 10)
=======
    let { password, ...rest } = req.body;
    const user = await User.create({ 
        ...rest,
        role: 'reviewer',
        passwordDigest: await bcrypt.hash(password, 10)
>>>>>>> 7c4106bd0327abc89ac5fc26c7300f2f1368da86
    })
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router