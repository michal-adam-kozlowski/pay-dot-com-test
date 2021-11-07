import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    id: String,
    name: String,
    surname: String,
    posts: Array
});