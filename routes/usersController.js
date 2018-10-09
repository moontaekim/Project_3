const router = require('express').Router()
const { User, FoodChallenge } = require('../db/schema')

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
  const challenges = await FoodChallenge.find()
  challenges.map( challenge => {
    user.foodChallenges.push(challenge._id)
  })
  const newUser = await user.save()
  res.send(newUser)
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