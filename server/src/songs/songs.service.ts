import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSongDto, PresentationSongDto } from './songs.dto';

import { Song } from './songs.scheme';

@Injectable()
export class SongsService {

    constructor(@InjectModel('Music') private readonly songModel: Model<Song>) {}

    async insertSong(createSongDto: CreateSongDto) {
        await new this.songModel(createSongDto).save();
        return 'aded music';
    }

    async getAllSongs(): Promise<PresentationSongDto[]> {
        const result = await this.songModel.find().exec();
        return result.map(song => new PresentationSongDto(song));
    } 

    async deleteSongById(id: string) {
        const result = await this.songModel.deleteOne({_id: `${id}`});
        return result
    }
}
