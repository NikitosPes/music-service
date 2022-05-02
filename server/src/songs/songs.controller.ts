import { Controller, Body, Get, Post, Delete, Param, HttpCode } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './songs.dto';



@Controller('songs')
export class SongsController {

  constructor(private readonly songsService: SongsService) {}

  @Post()
  @HttpCode(201)
  async addMusic(@Body() createSongDto: CreateSongDto) {
    const generatedId = await this.songsService.insertSong(createSongDto);
    return { id: generatedId };
  }

  @Get()
  async findAll() {
    const result = await this.songsService.getAllSongs();
    return result;
  }

  @Delete(':id')
  async deleteSong(@Param('id') id: string) {
    const result = await this.songsService.deleteSongById(id);
    return result;
  }
}
