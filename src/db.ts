import mongoose, { model, mongo, Schema } from 'mongoose'

mongoose.connect("mongodb+srv://admin:7CFtqFpEj4pMXxPv@cluster0.lpamn.mongodb.net/brainly")


const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String
})

export const UserModel = model("User", UserSchema)

const contentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
  //type: String,
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
})

export const ContentModel = model('Content', contentSchema);