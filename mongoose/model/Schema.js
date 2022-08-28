import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const newUser = new Schema({
  firstName: {
    type: String,
    unique: false,
    require: true,
  },
  sureName: {
    type: String,
    unique: true,
    require: true,
  },
  gender: {
    type: String,
    unique: false,
    require: true,
  },
  dob: {
    type: Date,
    unique: false,
    require: true,
  },
  password: {
    type: String,
    unique: false,
    require: true,
  },
  telNo: {
    type: Number,
    unique: false,
    require: true,
  },
  email: {
    type: String,
    unique: false,
    require: true,
  },
});

export default mongoose.model('users', newUser);
