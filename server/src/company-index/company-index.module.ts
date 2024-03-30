import { Module } from '@nestjs/common';
import { CompanyIndexService } from './company-index.service';
import { CompanyIndexController } from './company-index.controller';

import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CompanyIndexController],
  providers: [CompanyIndexService, PrismaService],
  exports: [CompanyIndexService],
})
export class CompanyIndexModule {}
