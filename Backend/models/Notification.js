const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotificationSchema = new Schema ({
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
    date:{
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        required: true,
        default: () => Date.now().toLocaleTimeString
    },
    priority: {
        type: String,
        required: true
    },

});


const Notification = mongoose.model('notifications', NotificationSchema, 'notifications');
module.exports = Notification;