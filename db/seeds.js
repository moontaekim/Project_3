require('dotenv').config()
const mongoose = require('mongoose')

const { User, FoodChallenge } = require('./schema')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const db = mongoose.connection

const moon = new User({
  name: 'Moon', 
  budget: 500,
  fatness: 0,
  img: '',
  foodChallenges: [],
  completedChallenges: []
})

const taylor = new User({
  name: 'Taylor',
  budget: 500,
  fatness: 0,
  img: '',
  foodChallenges: [],
  completedChallenges: []
})

const vortex = new FoodChallenge({
  name: 'Quadruple Bypass Burger Challenge', 
  location: 'The Vortex',
  address: "438 Moreland Ave NE",
  state: 'GA',
  difficulty: 3,
  price: 80,
  time: 30
})

const bigPie = new FoodChallenge({
  name: '30″ Carnivore Challenge',
  location: 'Big Pie In The Sky Pizzeria',
  address: '2090 Baker Rd, Ste A-103',
  state: 'GA',
  difficulty: 2,
  price: 50,
  time: 60
})

const saved = async () => {
  await User.deleteMany()
  await FoodChallenge.deleteMany()

  const user = await moon.save()
  const userTwo = await taylor.save()
  const foodchallenge = await vortex.save()
  const foodchallengeTwo = await bigPie.save()
  
  user.foodChallenges.push(foodchallenge._id)
  user.foodChallenges.push(foodchallengeTwo._id)
 
  userTwo.foodChallenges.push(foodchallenge._id)
  userTwo.foodChallenges.push(foodchallengeTwo._id)

  await user.save()
  await userTwo.save()

  db.close()
}

saved()
