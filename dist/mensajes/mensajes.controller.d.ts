import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
export declare class MensajesController {
    private mensajesService;
    constructor(mensajesService: MensajesService);
    create(createMensajeDto: CreateMensajeDto, response: any): void;
    getAll(response: any): void;
    update(updateMensajeDtos: CreateMensajeDto, response: any, idMensaje: any): void;
    delete(response: any, idMensaje: any): void;
}
