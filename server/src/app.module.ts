import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:p8YOCKJbykb9utEg@cluster0.ix3cl.mongodb.net/music-service-store?retryWrites=true&w=majority',
    ),
    SongsModule,
    UsersModule,
  ],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}
