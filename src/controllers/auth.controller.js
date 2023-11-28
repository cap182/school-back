import Teacher from "../models/teacher.model.js";
import Courses from "../models/course.model.js";

export const register = async (req, res) => {
    const { email, pssw, firstName, lastName, ident, age } = req.body
    const newTeacher = new Teacher({
        firstName,
        lastName,
        email,
        pssw,
        ident,
        age,

    })
    try {
        const teacherSaved = await newTeacher.save()
        res.json(teacherSaved)
    } catch (error) {
        console.error(error)
    }
    console.log('req', req)
};

export const login = async (req, res) => {
    const { email, pssw } = req.body

    try {
        const userLog = await Teacher.findOne({ email })
        if (userLog.pssw === pssw) {
            let response = {
                firstName: userLog.firstName,
                lastName: userLog.lastName,
                age: userLog.age,
                email: userLog.email,
                courses: []

            }
            const courses = await Courses.find({teacher: userLog.ident})
            response.courses = courses.map(({courseId, courseName, hoursWeek}) => ({courseId, courseName, hoursWeek}))
            res.json(response)
        }
        else {
            res.json({ "ok": false })
        }


    } catch (error) {
        console.error(error)

    }

}