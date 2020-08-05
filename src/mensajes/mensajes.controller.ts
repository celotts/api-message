/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
    static getAll(): any {
        throw new Error("Method not implemented.");
    }
    constructor(private mensajesService: MensajesService) { }
    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
        this.mensajesService.createMensaje(createMensajeDto)
            .then(mensaje => {
                response.status(HttpStatus.CREATED).json(mensaje)
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje: 'Error en la creación del mensaje.'
                })
            })
    }

    @Get()
    getAll(@Res() response) {

        this.mensajesService.getAll()
            .then(mensajeList => {
                response.status(HttpStatus.OK).json(mensajeList)
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje: 'Error en la obtención de los mensajes'
                })
            })
    }

    @Put(':id')
    update(@Param('id') idMensaje, @Body() updateMensajeDtos: CreateMensajeDto, @Res() response) {
        this.mensajesService.updateMensaje(idMensaje, updateMensajeDtos)
            .then(mensaje => {
                response.status(HttpStatus.OK).json(mensaje)
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje: 'Error en la actualización de los mensajes'
                })
            })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMensaje) {
        this.mensajesService.deleteMensaje(idMensaje)
            .then(res => {
                response.status(HttpStatus.OK).json(res)
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje: 'Error en la eliminación del mensaje'
                })
            })
    }
}
