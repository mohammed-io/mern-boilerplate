import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    required: true
  },
  slug: {
    type: String,
    default: '',
    required: true,
    unique: true
  },
  email: {
    type: String,
    default: '',
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    default: '',
    required: true
  }
});

export default mongoose.model('User', UserSchema);