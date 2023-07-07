const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  sharedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
