import { Test, TestingModule } from '@nestjs/testing';
import { CompanyIndexController } from './company-index.controller';
import { CompanyIndexService } from './company-index.service';

describe('CompanyIndexController', () => {
  let controller: CompanyIndexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyIndexController],
      providers: [CompanyIndexService],
    }).compile();

    controller = module.get<CompanyIndexController>(CompanyIndexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
