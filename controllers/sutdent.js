import student from "../models/student.js";
import department from "../models/department.js";
export const  all =async(req, res) => {
    const students = await student.find().lean();
    console .log(students);
    res.render('student/all',{students});
    
}

export const  create =async(req, res) => {
    const departments = await department.find().lean();     
    res.render('student/create',{departments});
}
export const  store =async(req, res) => {
    console.log(req.body);
    
}