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

router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.send(user)
})

router.put('/:userId', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
  res.send(user)
})

router.delete('/:userId', async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.userId)
  res.send(user)
})

module.exports = router