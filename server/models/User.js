import mongoose from 'mongoose';

const { Schema } = mongoose;


const User = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    createdDate:{
        type:Date,
        default:Date.now()
    }

});

const user = mongoose.model('user', User);

export default user;