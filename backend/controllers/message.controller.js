import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const { message } = req.body;

    let conversation = await Conversation.findOne({
      participants: [senderId, receiverId],
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: { $all: [senderId, receiverId] },
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await newMessage.save();
    // await conversation.save();
    await Promise.all([newMessage.save(), conversation.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const { id: userToChatWithId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatWithId] },
    }).populate("messages"); // not reference but the actual messages array

    let messages = [];
    if (!conversation) {
      messages = [];
    } else {
      messages = conversation.messages;
    }

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};
