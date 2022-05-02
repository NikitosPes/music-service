import * as mongoose from 'mongoose';

export const SongsScheme = new mongoose.Schema({
  name: { type: String, required: true },
  groupName: { type: String, required: true },
  duration: { type: String, required: true },
  imgURL: { type: String, required: false }
});

export interface Song {
  _id: string,
  name: string,
  groupName: string,
  duration: string,
  imgURL: string
}

