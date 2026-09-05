const mongoose = require('mongoose');
const {Schema} = mongoose;

const FocusSchema = new Schema ({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    breakDuration: {
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});


const Focus = mongoose.model('focus', FocusSchema, 'focus');
module.exports = Focus;