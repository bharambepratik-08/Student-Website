const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        default: 'low priority'
    },
    catogery: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: false
    },
    setReminder: {
        type: Boolean,
        required: false,
        default: true
    }
})

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;