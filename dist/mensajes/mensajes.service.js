"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mensaje_entity_1 = require("./entities/mensaje.entity");
const typeorm_2 = require("typeorm");
let MensajesService = class MensajesService {
    constructor(mensajeRepository) {
        this.mensajeRepository = mensajeRepository;
    }
    async getAll() {
        return await this.mensajeRepository.find();
    }
    async createMensaje(mensajeNuevo) {
        const nuevoMensaje = new mensaje_entity_1.Mensaje();
        nuevoMensaje.mensaje = mensajeNuevo.mensaje;
        nuevoMensaje.nick = mensajeNuevo.nick;
        return await this.mensajeRepository.save(nuevoMensaje);
    }
    async updateMensaje(idMensaje, mensajeUpdate) {
        const mensajeActualizar = await this.mensajeRepository.findOne(idMensaje);
        mensajeActualizar.nick = mensajeUpdate.nick;
        mensajeActualizar.mensaje = mensajeUpdate.mensaje;
        return await this.mensajeRepository.save(mensajeActualizar);
    }
    async deleteMensaje(idMensaje) {
        return await this.mensajeRepository.delete(idMensaje);
    }
};
MensajesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(mensaje_entity_1.Mensaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MensajesService);
exports.MensajesService = MensajesService;
//# sourceMappingURL=mensajes.service.js.map