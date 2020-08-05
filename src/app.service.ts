import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      codigo: 1,
      descripcion: 'Hello Carlos Lott!'
    }
  }
}
