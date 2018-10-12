const router = require('express').Router({mergeParams: true})
const { User, FoodChallenge } = require('../db/schema')

router.get('/', async(req, res) => {
  const user = await User.findById(req.params.userId).populate('foodChallenges')
  const foodChallenges = user.foodChallenges
  res.send(foodChallenges)
})

router.get('/:id', async(req, res) => {
  const user = await User.findById(req.params.userId)
  const foodChallenges = user.foodChallenges
  const foodChallenge = foodChallenges.map((challenge) => {
    return challenge._id
  })
  const oneChallenge = await FoodChallenge.findById(foodChallenge)
  res.send(oneChallenge)
})

router.post('/:id', async(req, res) => {
  const user = await User.findById(req.params.userId)
  const completedChallenge = await FoodChallenge.findById(req.params.id)
  user.completedChallenges.push(completedChallenge)
  const updatedUser = await user.save()
  res.send(updatedUser)
})

router.put('/:id', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const foodChallenges = user.foodChallenges
  const foodChallenge = foodChallenges.map((challenge) => {
    return challenge._id
  })
  const failedChallenge = await FoodChallenge.findByIdAndUpdate(foodChallenge, req.body, {new:true})

  res.send(failedChallenge)
})


module.exports = router