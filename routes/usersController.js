const router = require('express').Router()
const { User } = require('../db/schema')

router.get('/', async (req,res) => {
  const users = await User.find()
  res.send(users)
})

router.get('/:userId', async (req, res) => {
  const users = await User.findById(req.params.userId)
  res.send(users)
})

module.exports = router