import { Schema,model } from "mongoose";
const student = new Schema({
    name : {
        type:String,
        required:true
    },
    email :{
        type:String,
    }
});
export default model('student',student);