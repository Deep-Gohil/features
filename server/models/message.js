const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
    message: { type: String, required: true },
    scheduleTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'sent'], default: 'pending' }
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;