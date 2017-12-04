import mongoose, { Schema, Types } from "mongoose";

export const massRecordSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: Types.ObjectId,
  },
  userId: {
    type: String,
    required: true,
  },
  mass: {
    type: Number,
    min: 0,
    required: true,
  },
  massUnit: {
    type: String,
    required: true,
    enum: ["kg", "lbm", "stone"],
    default: "kg",
  },
  bodyFatPercentage: {
    type: Number,
    min: 0,
    max: 1,
    required: false,
  },
  takenAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  recordedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const MassRecord = mongoose.model("massRecord", massRecordSchema);

export const getUserMassRecords = (root, { userId }) =>
  new Promise((resolve, reject) =>
    MassRecord.find({ userId }).exec(
      (error, response) => (error ? reject(error) : resolve(response)),
    ),
  );

export const addMassRecord = (root, { userId, mass, massUnit, bodyFatPercentage }) =>
  new Promise((resolve, reject) =>
    new MassRecord({ userId, mass, massUnit, bodyFatPercentage }).save(
      (error, response) => (error ? reject(error) : resolve(response)),
    ),
  );

export default {
  ...MassRecord,
  getUserMassRecords,
  addMassRecord,
};
