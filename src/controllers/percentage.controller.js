import Teacher from "../models/teacher.model.js";
import Courses from "../models/course.model.js";
import Percentage from "../models/percentage.model.js";

export const getPercentage = async (req, res) => {
    const {course} = req.params
    try {
        const percentage = await Percentage.find({course})
        res.json(percentage)
    } catch (error) {
        console.error(error)
    }
    
}

export const createPercentage = async (req, res) => {
    const { percentageId, course, percentage, description } = req.body
    const newPercentage = new Percentage({
        percentageId,
        course,
        percentage,
        description
    })
    try {
        const percentageSaved = await newPercentage.save()
        res.json(percentageSaved)
    } catch (error) {
        console.error(error)
    }
    console.log('req', req)
};

export const updatePercentage = async (req, res) => {

}
export const deletePercentage = async (req, res) => {

}

