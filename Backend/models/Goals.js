const mongoose = require('mongoose');
const {Schema} = mongoose;

const GoalSchema = new Schema ({
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
    tag:{
        type: String,
        required: true
    },
    bar:{
        type: String,
        required: true
    },
    catogery:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});


const Goal = mongoose.model('goals', GoalSchema, 'goals');
module.exports = Goal;