import mongoose from "mongoose";

const percentageSchema = new mongoose.Schema({
    percentageId: {
        type:String,
        requied: true,
        trim: true,
        unique: true
    },
    course: {
        type:String,
        requied: true,
        trim: true
    },
    percentage: {
        type:Number,
        required: true
    },
    description: {
        type:String,
        requied: true,
        trim: true
    }
})

export default mongoose.model('Percentage', percentageSchema)