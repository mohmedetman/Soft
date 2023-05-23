
import { schema, model } from 'mongoose';

const department = new schema ({
    
    name: {
        type: string,
        required: true,
    },

    Code: {
        type: string,
        required: false,
    },
  },

   { timestamps: true }
)
//   {
//     name: {
//         type: string,
//         required: true,
//     },

//     Code: {
//         type: string,
//         required: false,
//     },
//   },

//    { timestamps; true }

// };

export default model('department', department); 



