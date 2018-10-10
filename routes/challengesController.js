const router = require('express').Router({mergeParams: true})
const { User, FoodChallenge } = require('../db/schema')


router.get('/', async(req, res) => {
  const foodChallenges = await FoodChallenge.find()
  res.send(foodChallenges)
})

router.get('/:id', async (req, res) => {
  const foodchallenge = await FoodChallenge.findById(req.params.id)
  res.send(foodchallenge)
})


router.post('/', async (req, res) => {
  const foodChallenge = await FoodChallenge.create(req.body)
  const foodChallenges = await FoodChallenge.find()
  foodChallenges.push(foodChallenge)
  res.send(foodChallenges)
})

module.exports = router