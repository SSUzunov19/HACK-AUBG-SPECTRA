import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyIndexDto {
    @ApiProperty({ example: 'ABC Company', description: 'The name of the company' })
    name: string;

    @ApiProperty({ example: 'Location', description: 'The location of the company' })
    location: string;

    @ApiProperty({ example: 50, description: 'The intensity of renewable resources used by the company' })
    renewableResources: number;

    @ApiProperty({ example: 30, description: 'The intensity of recyclable resources used by the company' })
    recyclableResources: number;

    @ApiProperty({ example: 0, description: 'The intensity of sustainable resources used by the company' })
    sustainableResources: number;

    @ApiProperty({ example: 1000, description: 'The amount of water used by the company per day' })
    waterPerDay: number;

    @ApiProperty({ example: 500, description: 'The amount of energy used by the company per day' })
    energyPerDay: number;

    @ApiProperty({ example: 50, description: 'The percentage of land covered by natural vegetation' })
    landOnNaturalCover: number;

    @ApiProperty({ example: 1, description: 'Whether the company uses renewable energy (1 for Yes, 0 for No)' })
    renewableEnergy: number;

    @ApiProperty({ example: 1000, description: 'The amount of greenhouse gas emissions by the company' })
    ghgProduct: number;

    @ApiProperty({ example: 80, description: 'The energy process efficiency of the company' })
    energyEfficiency: number;

    @ApiProperty({ example: 1, description: 'Whether the company throws waste materials (1 for Yes, 0 for No)' })
    waste: number;

    @ApiProperty({ example: 1, description: 'Whether the company recycles waste materials (1 for Yes, 0 for No)' })
    recycledWaste: number;

    @ApiProperty({ example: 80, description: 'The utilization of waste minimization by the company' })
    wasteMinimization: number;

    @ApiProperty({ example: 1, description: 'Whether the company\'s products are recyclable (1 for Yes, 0 for No)' })
    recyclability: number;

    @ApiProperty({ example: 90, description: 'The efficiency of the waste management system' })
    wasteEfficiency: number;

    @ApiProperty({ example: 70, description: 'The percentage of recycled components used by the company' })
    replacableComponents: number;

    @ApiProperty({ example: 1, description: 'Whether the company uses biodegradable materials (1 for Yes, 0 for No)' })
    biodegradableMaterials: number;

    @ApiProperty({ example: 20, description: 'The size of packaging materials used by the company' })
    packageSizeOptimization: number;

    @ApiProperty({ example: 1, description: 'Whether the company uses secondary resized materials (1 for Yes, 0 for No)' })
    secondaryPackageMaterials: number;
}
