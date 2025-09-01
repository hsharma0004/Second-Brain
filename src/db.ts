import mongoose , {model , Schema} from 'mongoose'

mongoose.connect("mongodb+srv://admin:7CFtqFpEj4pMXxPv@cluster0.lpamn.mongodb.net/brainly")


const UserSchema = new Schema({
  username: {type: String , unique: true},
  password : String
})

export const UserModel = model("User",UserSchema)