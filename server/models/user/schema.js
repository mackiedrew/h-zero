import mongoose, { Schema, Types } from "mongoose";
import isEmail from "validator/lib/isEmail";

export const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: Types.ObjectId,
  },
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    validate: value => isEmail(value),
  },
  registeredOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);

export const getUsers = () =>
  new Promise((resolve, reject) =>
    User.find({}).exec((error, response) => (error ? reject(error) : resolve(response))),
  );

export const getUserById = (root, { id }) =>
  new Promise((resolve, reject) =>
    User.findOne({ id }).exec((error, response) => (error ? reject(error) : resolve(response))),
  );

export const addUser = (root, { name, email }) => {
  const newUser = new User({ name, email });

  return new Promise((resolve, reject) =>
    newUser.save((error, response) => (error ? reject(error) : resolve(response))),
  );
};

export const updateUser = (root, { id, name, email }) => {
  const updatedUser = { name, email };
  return new Promise((resolve, reject) =>
    User.findOneAndUpdate({ id }, { $set: updatedUser }, { returnNewDocument: true }).exec(
      (error, response) => (error ? reject(error) : resolve(response)),
    ),
  );
};

export default {
  ...User,
  getUsers,
  getUserById,
  addUser,
  updateUser,
};
