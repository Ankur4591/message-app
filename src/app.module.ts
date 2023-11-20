import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './Messages/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [MessageModule,
  TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"root",
    database:"Message",
    entities:[],
    synchronize:true

  })
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
