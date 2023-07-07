import {model, models, Schema, mongoose} from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  community: { type: mongoose.Schema.Types.ObjectId, ref: 'Community'},
  shares: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  saves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  parent: {type:mongoose.Types.ObjectId, ref: 'Post'},
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }],
  downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }]
}, {timestamps: true});

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema) 
