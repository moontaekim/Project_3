const mongoose = require('mongoose')

const Schema = require('mongoose').Schema


const UserSchema = new Schema({
  name: String,
  fatness: Number,
  img: String,
  foodChallenges : [{ type: Schema.Types.ObjectId, ref: 'FoodChallenge'}],
  completedChallenges: [{ type: Schema.Types.ObjectId, ref: 'FoodChallenge'}]
})

const FoodChallengeSchema = new Schema({
  name: String,
  location: String,
  img: String,
  address: String,
  state: String,
  fatness_points: Number,
  price: Number,
  time: Number,
  failed: Boolean
})

const UserModel = mongoose.model('User', UserSchema)
const FoodChallengeModel = mongoose.model('FoodChallenge', FoodChallengeSchema)

module.exports = {
  User: UserModel,
  FoodChallenge: FoodChallengeModel
}