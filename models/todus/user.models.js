import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'user name is required'],
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: [true, 'email is lowercase'],
    },

    password: {
      type: String,
      min: [6, 'max length 6'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
