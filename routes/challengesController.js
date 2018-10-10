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

//post route for adding new challenge
//make a new router for just challenges at api/challenges
//this post route needs to create a new challenge for everyone
router.post('/', async (req, res) => {
  const foodChallenge = await FoodChallenge.create(req.body)
  const foodChallenges = await FoodChallenge.find()
  foodChallenges.push(foodChallenge)
  // foodChallenges.save()
  res.send(foodChallenges)
})

module.exports = router