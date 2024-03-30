import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Company name', description: 'Company name' })
  companyName: string;

  @ApiProperty({ example: 'securepassword', description: 'Password' })
  password: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email' })
  email: string;

  @ApiProperty({ example: '088 888 8888', description: 'Phone number' })
  phone: string;


  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Image URL', required: false })
  imgUrl?: string;

  @ApiProperty({ example: 'About me', description: 'About', required: false })
  about?: string;

  @ApiProperty({ example: 'https://facebook.com/johndoe', description: 'Facebook URL', required: false })
  facebook?: string;

  @ApiProperty({ example: 'https://linkedin.com/in/johndoe', description: 'LinkedIn URL', required: false })
  linkedin?: string;

  @ApiProperty({ example: 'https://twitter.com/johndoe', description: 'Twitter URL', required: false })
  twitter?: string;

  @ApiProperty({ example: 'https://instagram.com/johndoe', description: 'Instagram URL', required: false })
  instagram?: string;
}
