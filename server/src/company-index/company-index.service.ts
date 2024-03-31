import { Injectable } from '@nestjs/common';
import { CreateCompanyIndexDto } from './dto/create-company-index.dto';
import { UpdateCompanyIndexDto } from './dto/update-company-index.dto';

import { PrismaService } from '../prisma.service';
import {CompanyIndex, Prisma} from '@prisma/client';

@Injectable()
export class CompanyIndexService {
  constructor(private prisma: PrismaService) {}
  async createCompanyIndex(data: Prisma.CompanyIndexCreateInput): Promise<CompanyIndex> {
    return this.prisma.companyIndex.create({ data });
  }
  
  async createManyCompanyIndex(data: Prisma.CompanyIndexCreateInput[]): Promise<Prisma.BatchPayload> {
    return this.prisma.companyIndex.createMany({ data });
  }

  async findAllCompanyIndex(): Promise<CompanyIndex[]> {
    return this.prisma.companyIndex.findMany();
  }

  async findCompanyIndexById(id: string): Promise<CompanyIndex | null> {
    return this.prisma.companyIndex.findUnique({
      where: { id },
    });
  }

  async findCompanyIndexByCompanyName(name: string): Promise<CompanyIndex | null> {
    return this.prisma.companyIndex.findUnique({
      where: { name },
    });
  }

  async updateCompanyIndex(id: string, data: Prisma.CompanyIndexUpdateInput): Promise<CompanyIndex> {
    return this.prisma.companyIndex.update({
      where: { id },
      data,
    });
  }

  async deleteCompanyIndex(id: string): Promise<CompanyIndex> {
    return this.prisma.companyIndex.delete({
      where: { id },
    });
  }
}
