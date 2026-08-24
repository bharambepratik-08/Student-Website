const mongoose = require('mongoose');
const {Schema} = mongoose;

const FocusSchema = new Schema ({
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
    date:{
        type: Date,
        default: Date.now
    }
});


const Focus = mongoose.model('focus', FocusSchema, 'focus');
module.exports = Focus;