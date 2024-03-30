import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { PrismaService } from './prisma.service';
import { CompanyIndexModule } from './company-index/company-index.module';

@Module({
  providers: [PrismaService],
  imports: [AuthModule, UserModule, CompanyIndexModule],
})
export class AppModule {}
