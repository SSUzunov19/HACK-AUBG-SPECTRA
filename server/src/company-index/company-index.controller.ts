import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CompanyIndexService } from './company-index.service';
import { CompanyIndex as CompanyIndexModel, Prisma } from '@prisma/client';
import { CreateCompanyIndexDto } from './dto/create-company-index.dto';
import { UpdateCompanyIndexDto } from './dto/update-company-index.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('company-index')
@Controller('company-index')
export class CompanyIndexController {
  constructor(private readonly companyIndexService: CompanyIndexService) {}

  @Post()
  @ApiOperation({ summary: 'Create company index' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateCompanyIndexDto,
  })
  @ApiBody({ type: CreateCompanyIndexDto })
  async createCompanyIndex(
    @Body() companyIndexData: Prisma.CompanyIndexCreateInput,
  ): Promise<CompanyIndexModel> {
    return this.companyIndexService.createCompanyIndex(companyIndexData);
  }

  @Get()
  @ApiOperation({ summary: 'Get all company index' })
  @ApiOkResponse({
    description: 'Found records.',
    type: CreateCompanyIndexDto,
    isArray: true,
  })
  async getAllCompanyIndex(): Promise<CompanyIndexModel[]> {
    return this.companyIndexService.findAllCompanyIndex();
  }

  @Get('company-name/:companyName')
  @ApiOperation({ summary: 'Get company index by company name' })
  @ApiOkResponse({
    description: 'Found record.',
    type: CreateCompanyIndexDto,
  })
  async getCompanyIndexByCompanyName(
    @Param('companyName') companyName: string,
  ): Promise<CompanyIndexModel> {
    return this.companyIndexService.findCompanyIndexByCompanyName(companyName);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get company index by id' })
  @ApiOkResponse({
    description: 'Found record.',
    type: CreateCompanyIndexDto,
  })
  async getCompanyIndexById(
    @Param
    ('id') id: string,
  ): Promise<CompanyIndexModel> {
    return this.companyIndexService.findCompanyIndexById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update company index by id' })
  @ApiOkResponse({
    description: 'Updated record.',
    type: CreateCompanyIndexDto,
  })
  @ApiBody({ type: UpdateCompanyIndexDto })
  async updateCompanyIndex(
    @Param('id') id: string,
    @Body() companyIndexData: Prisma.CompanyIndexUpdateInput,
  ): Promise<CompanyIndexModel> {
    return this.companyIndexService.updateCompanyIndex(id, companyIndexData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete company index by id' })
  @ApiOkResponse({
    description: 'Deleted record.',
    type: CreateCompanyIndexDto,
  })
  async deleteCompanyIndex(
    @Param('id') id: string,
  ): Promise<CompanyIndexModel> {
    return this.companyIndexService.deleteCompanyIndex(id);
  }
}
