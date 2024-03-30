import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel, Prisma } from '@prisma/client';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';

import { HttpException, HttpStatus } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserDto,
  })
  @ApiBody({ type: CreateUserDto })
  async createUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    try {
      return await this.usersService.createUser(userData);
    } catch (error) {
      // Handle specific error or return a generic error response
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    description: 'Found records.',
    type: UserDto,
    isArray: true,
  })
  async getAllUsers(): Promise<UserModel[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiOkResponse({ description: 'Found one record.', type: UserDto })
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.usersService.findUserById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: UserDto,
  })
  @ApiBody({ type: UpdateUserDto })
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.usersService.updateUser(id, userData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    type: UserDto,
  })
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.deleteUser(id);
  }
}
