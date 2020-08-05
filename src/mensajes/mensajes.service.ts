import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>
    ) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getAll(): Promise<Mensaje[]> {
        return await this.mensajeRepository.find();

    }

    async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje> {
        const nuevoMensaje = new Mensaje();
        nuevoMensaje.mensaje = mensajeNuevo.mensaje;
        nuevoMensaje.nick = mensajeNuevo.nick;

        return await this.mensajeRepository.save(nuevoMensaje);

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async updateMensaje(idMensaje: number, mensajeUpdate: CreateMensajeDto): Promise<Mensaje> {
        const mensajeActualizar = await this.mensajeRepository.findOne(idMensaje);
        mensajeActualizar.nick = mensajeUpdate.nick;
        mensajeActualizar.mensaje = mensajeUpdate.mensaje;
        return await this.mensajeRepository.save(mensajeActualizar);

    }

    async deleteMensaje(idMensaje: number): Promise<any> {
        return await this.mensajeRepository.delete(idMensaje)

    }
}
