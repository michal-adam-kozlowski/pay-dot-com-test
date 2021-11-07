import mongoose from 'mongoose';

const { Schema } = mongoose;

export const postSchema = new Schema({
  id: String,
  name: String,
  description: String,
  users: Array,
});
