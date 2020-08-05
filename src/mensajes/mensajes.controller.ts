/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {
    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto): string {
        return 'Mensaje Creado'
    }

    @Get()
    getAll(): any {
        return 'Lista de mensaje';
    }

    @Put(':id')
    update(@Body() updateMensajeDtos: CreateMensajeDto): any {
        return 'Actualizado'
    }

    @Delete(':id')
    delete() {
        return 'Mensaje Eliminado'
    }
}
