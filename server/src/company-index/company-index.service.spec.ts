import { Test, TestingModule } from '@nestjs/testing';
import { CompanyIndexService } from './company-index.service';

describe('CompanyIndexService', () => {
  let service: CompanyIndexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyIndexService],
    }).compile();

    service = module.get<CompanyIndexService>(CompanyIndexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
