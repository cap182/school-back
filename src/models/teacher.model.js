import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    firstName: {
        type:String,
        requied: true,
        trim: true
    },
    lastName: {
        type:String,
        requied: true,
        trim: true
    },
    age: {
        type:Number
    },
    ident: {
        type:Number,
        requied: true,
        unique: true
    },
    email: {
        type:String,
        requied: true,
        trim: true,
        unique: true
    },
    pssw: {
        type:String,
        requied: true
    }

})

export default mongoose.model('Teacher', teacherSchema)