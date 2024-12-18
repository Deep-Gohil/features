const Message = require("../models/message")

const getAllMessage = async (req, res) => {
    try {
        let allMessages = await Message.find();
        res.json(allMessages);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

getMessageById = async (req, res) => {
    try {
        let message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json(message);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const createMessage = async (req, res) => {
    try {
        let newMessage = await Message.create(req.body);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const updateMessage = async (req, res) => {
    try {
        let {id} = req.params;
        let updatedMessage = await Message.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json(updatedMessage);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const deleteMessage = async (req, res) => {
    try {
        let {id} = req.params;
        let deletedMessage = await Message.findByIdAndDelete(id);
        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json(deletedMessage);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {getAllMessage,getMessageById,createMessage,updateMessage,deleteMessage};