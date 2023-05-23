// import { model,mongoose } from 'mongoose';
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
      name: {
          type: String,
          required: [true, "Please enter a product name"]
      },
      email: {
          type: String,  
      },
      password: {
        type: String,  
    },
    
  },
  
);

//export default 
const product = mongoose.model('product', productSchema);
// = { add };
add = ()=>{
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://localhost:27017/mohmed").then(()=>{
            return product.insertMany({
                name:"aadsad",
                email:"dasdsa",
            },{
                name:"aadmmsad",
                email:"dasdsa",
            }).then(()=>{
                resolve()
            }).catch(()=>{
                reject() 
            })
            
        })
    })
}


export default ('efwef',add);