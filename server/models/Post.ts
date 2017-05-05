import { Schema, model } from 'mongoose';

let PostSchema: Schema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    required: true
  },
  slug: {
    type: String,
    default: '',
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    default: '',
    required: true,
    unique: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default model('Post', PostSchema);