import { Schema,model } from "mongoose";
const student = new Schema({
    name : {
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
    }

    password :{
        type:String,
        required:true,


    }
    material :{
            type:String,
            required:true,
    } 

});
export default model('student',department);