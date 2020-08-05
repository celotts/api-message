import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes/mensajes.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3308,
    "username": "root",
    "password": "1396",
    "database": "message_Bd",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  })],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule { }
