import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseId: {
        type:String,
        requied: true,
        trim: true,
        unique: true
    },
    courseName: {
        type:String,
        requied: true,
        trim: true
    },
    hoursWeek: {
        type:Number,
        required: true
    },
    teacher: {
        type:Number,
        requied: true
    }

})

export default mongoose.model('Course', courseSchema)