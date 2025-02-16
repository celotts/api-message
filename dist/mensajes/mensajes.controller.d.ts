import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
export declare class MensajesController {
    private mensajesService;
    static getAll(): any;
    constructor(mensajesService: MensajesService);
    create(createMensajeDto: CreateMensajeDto, response: any): void;
    getAll(response: any): void;
    update(idMensaje: any, updateMensajeDtos: CreateMensajeDto, response: any): void;
    delete(response: any, idMensaje: any): void;
}
