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
  img:'https://www.foodchallenges.com/wp-content/uploads/2015/12/360-Vortexs-Quadruple-Bypass-Challenge-240x146.jpg',
  state: 'GA',
  fatness_points: 3,
  price: 80,
  time: 30,
  failed: false
})

const bigPie = new FoodChallenge({
  name: '30″ Carnivore Challenge',
  location: 'Big Pie In The Sky Pizzeria',
  address: '2090 Baker Rd, Ste A-103',
  img:'https://www.foodchallenges.com/wp-content/uploads/2014/05/359-Big-Pie-In-Skys-Carnivore-Challenge-240x173.jpg',
  state: 'GA',
  fatness_points: 2,
  price: 50,
  time: 60,
  failed: false
})

const screamNuts = new FoodChallenge({
  name: 'Are You Scream’N Nuts?',
  location: 'Screamin Nuts',
  address: '5950 North Point Pkwy',
  img:'https://www.foodchallenges.com/wp-content/uploads/2017/12/donuts-e1512756735519.jpg',
  state: 'GA',
  fatness_points: 5,
  price: 48,
  time: 30,
  failed: false

})

const totcho = new FoodChallenge({
  name: 'Macho Totcho',
  location: 'The Nook',
  address: '1144 Piedmont Ave NE',
  img:'https://www.foodchallenges.com/wp-content/uploads/2017/08/The-Nooks-Macho-Tatcho-Challenge-e1504149950238.jpg',
  state: 'GA',
  fatness_points: 3,
  price: 35,
  time: 90,
  failed: false

})

const bigBurrito = new FoodChallenge({
  name: '5lb Big Burrito',
  location: 'Casa Bariachi',
  address: '107 Market Center',
  img:'https://www.foodchallenges.com/wp-content/uploads/2015/06/casa-bariachi-240x180.jpg',
  state: 'GA',
  fatness_points: 3,
  price: 12,
  time: 20,
  failed: false

})

const ramen = new FoodChallenge({
  name: '4 Bowl Ramen',
  location: 'Umaido Japanese Restaurant',
  address: '2790 Lawrenceville-Suwanee Rd, Ste #140',
  img:'https://www.foodchallenges.com/wp-content/uploads/2014/05/Umaido-240x179.jpg',
  state: 'GA',
  fatness_points: 2,
  price: 20,
  time: 15,
  failed: false

})

const saved = async () => {
  await User.deleteMany()
  await FoodChallenge.deleteMany()

  const user = await moon.save()
  const userTwo = await taylor.save()
  const foodchallenge = await vortex.save()
  const foodchallengeTwo = await bigPie.save()
  const foodchallengeThree = await screamNuts.save()
  const foodchallengeFour = await totcho.save()
  const foodchallengeFive = await bigBurrito.save()
  const foodchallengeSix = await ramen.save()



  
  user.foodChallenges.push(foodchallenge._id)
  user.foodChallenges.push(foodchallengeTwo._id)
  user.foodChallenges.push(foodchallengeThree._id)
  user.foodChallenges.push(foodchallengeFour._id)
  user.foodChallenges.push(foodchallengeFive._id)
  user.foodChallenges.push(foodchallengeSix._id)



 
  userTwo.foodChallenges.push(foodchallenge._id)
  userTwo.foodChallenges.push(foodchallengeTwo._id)
  userTwo.foodChallenges.push(foodchallengeThree._id)
  userTwo.foodChallenges.push(foodchallengeFour._id)
  userTwo.foodChallenges.push(foodchallengeFive._id)
  userTwo.foodChallenges.push(foodchallengeSix._id)




  await user.save()
  await userTwo.save()

  db.close()
}

saved()
