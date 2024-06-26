import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    image:{
        type:String
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:[String]
    },
    fromGoogle:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

export default mongoose.model("User",userSchema)