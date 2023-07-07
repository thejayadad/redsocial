import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

export default mongoose?.models?.Community || mongoose.model("Community", CommunitySchema)