import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

let UserSchema: Schema = new Schema({
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
  },
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

// hash user's password before saving to db
UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) { 
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

export default model('User', UserSchema);