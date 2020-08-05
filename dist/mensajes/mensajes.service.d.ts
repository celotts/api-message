import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
export declare class MensajesService {
    private readonly mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getall(): Promise<Mensaje[]>;
    createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    updateMensaje(idMensaje: number, mensajeUpdate: CreateMensajeDto): Promise<Mensaje>;
    deleteMensaje(idMensaje: number): Promise<import("typeorm").DeleteResult>;
}
