import { Schema,model } from "mongoose";
const doctor = new Schema({
    name : {
        type:String,
        required:true
    },


    password :{
        type:String,
        required:true,


    }
    subject :{
            type:String,
            required:true,
    } 
    
});
export default model('doctor',department);