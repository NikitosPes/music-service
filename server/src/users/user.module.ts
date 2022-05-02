import * as mongoose from 'mongoose';

export const UserScheme = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});


export interface User {
  _id: string,
  name: string,
  surname: string,
  email: string,
  password: string,
}