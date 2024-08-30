const mongoose = require("mongoose");
const messageModel = require("./messageModel");
const messageModel = require("./messageModel");
const userModel = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    passsword: { type: String, trim: true, required: true },
    profilePic: {
      type: String,
      trim: true,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    // chats: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Chat",
    //   },
    // ],
    // messages: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Message",
    //   },
    // ],
  },
  {
    timeStamps: true,
  }
);

const user = mongoose.model("userModel", userModel);
exports.module = user;
