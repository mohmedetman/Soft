import { schema, model } from 'mongoose';
import { required } from 'nodemon/lib/config';

const department = new schema (
  {
    name: {
        type: String,
        required: true,
    },

    Code: {
        type: String,
        required: false,
    },
    department: {
        type: schema.types.objectid,
        required : false,
        ref: 'department'

    }
  },

   { timestamps: true }

);

export default model('subject', department); 