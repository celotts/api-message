import { Test } from '@nestjs/testing';
import { MensajesController } from './mensajes.controller';
import { MensajesService } from './mensajes.service';

describe('MensajesController', () => {
  let mensajesController: MensajesController;
  let mensajesService: MensajesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MensajesController],
      providers: [MensajesService],
    }).compile();

    mensajesService = moduleRef.get<MensajesService>(MensajesService);
    mensajesController = moduleRef.get<MensajesController>(MensajesController);
  });

  describe('getAll', () => {
    it('should return an array of getAll', async () => {
      const result = <any>[]
      jest.spyOn(mensajesService, 'getAll').mockImplementation(() => result);

      expect(await mensajesController.getAll(result)).toBe(result);
    });
  });
});
