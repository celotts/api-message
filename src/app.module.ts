import { Module } from '@nestjs/common';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes/mensajes.service';
import { Mensaje } from './mensajes/entities/mensaje.entity';

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
  }),
  TypeOrmModule.forFeature([Mensaje])
  ],
  controllers: [MensajesController],
  providers: [MensajesService],
})
export class AppModule { }
