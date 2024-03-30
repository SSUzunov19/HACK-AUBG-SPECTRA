import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  imports: [AuthModule, UserModule],
})
export class AppModule {}
