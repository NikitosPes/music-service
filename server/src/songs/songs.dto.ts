import { Song } from "./songs.scheme";

export class CreateSongDto {
  name: string;
  groupName: string;
  duration: string;
  imgURL: string;
}

export class UpdateSongDto {
  imgURL: string;
}

export class PresentationSongDto {
  id: string;
  name: string;
  groupName: string;
  duration: string;
  imgURL: string;

  constructor(song: Song) {
    this.id = song._id;
    this.name = song.name;
    this.groupName = song.groupName;
    this.duration = song.duration;
    this.imgURL = song.imgURL;
  }
}
