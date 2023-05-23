import subject from "../models/subject.js";
import department from'../models/department.js';

export const index = async (req,res) => {
     
    const subjects = await subject.find({},{name :1}).lean();
    

    res.render('subject/index ' ,{subjects});
};
export const create = async (req,res) => {
    const departments = await department.find().lean();
    res.render('subjects/create',{departments});

};

export const store = async (req,res) => {

    console.log(req.body);
     
    const{ name, code, department } = req.body;

   await subject.create({
        name,
        code,
        department,
});

    res.redirect('/subjects');

};

export const show =async (req,res) => {
    const { id } = req.params;
    

   const singleSubject = await subject
   .findById(id)
   .populate('department')
   .lean();

   res.render('subjects/show',{subject:singleSubject});

     
};