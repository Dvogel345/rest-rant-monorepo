const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db

router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
<<<<<<< HEAD
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json({ user: user, token: result.value })
    }
})

=======
        req.session.userId = user.userId
        res.json({ user })
    }
})


>>>>>>> 7c4106bd0327abc89ac5fc26c7300f2f1368da86
router.get('/profile', async (req, res) => {
    res.json(req.currentUser)
})

module.exports = router
