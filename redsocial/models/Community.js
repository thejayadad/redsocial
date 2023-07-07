import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    subscribers: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Users',
        },
        approved: {
          type: Boolean,
          default: false,
        },
      },
    ],

}, {timestamps: true})

export default mongoose?.models?.Community || mongoose.model("Community", CommunitySchema)