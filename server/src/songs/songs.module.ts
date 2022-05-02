import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsScheme } from './songs.scheme';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Music', schema: SongsScheme}])],
    controllers: [SongsController],
    providers: [SongsService]
})
export class SongsModule {}
