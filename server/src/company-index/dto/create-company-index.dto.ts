import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyIndexDto {
    @ApiProperty({ example: 'ABC Company', description: 'The name of the company' })
    companyName: string;

    @ApiProperty({ example: 'Location', description: 'The location of the company' })
    location: string;

    @ApiProperty({ example: '50%', description: 'The intensity of renewable materials used by the company' })
    renewableMaterialsIntensity: string;

    @ApiProperty({ example: '30%', description: 'The intensity of recyclable materials used by the company' })
    recycableMaterialsIntensity: string;

    @ApiProperty({ example: 'Yes', description: 'Whether the company sources raw materials sustainably' })
    rawMaterialsSourcedSustainably: string;

    @ApiProperty({ example: '1000 liters', description: 'The amount of water used by the company' })
    useOfWater: string;

    @ApiProperty({ example: '500 kWh', description: 'The amount of energy used by the company' })
    useOfEnergy: string;

    @ApiProperty({ example: '50%', description: 'The percentage of land covered by natural vegetation' })
    partOfLandOnNaturalCover: string;

    @ApiProperty({ example: 'Yes', description: 'Whether the company uses renewable energy' })
    useOfRenewableEnergy: string;

    @ApiProperty({ example: '1000 kg', description: 'The amount of greenhouse gas emissions by the company' })
    greenhouseGasEmissions: string;

    @ApiProperty({ example: '80%', description: 'The energy process efficiency of the company' })
    energyProcessEfficiency: string;

    @ApiProperty({ example: 'Yes', description: 'Whether the company throws waste materials' })
    throwingWasterMaterials: string;

    @ApiProperty({ example: 'Yes', description: 'Whether the company recycles waste materials' })
    recyclingWasterMaterials: string;

    @ApiProperty({ example: '80%', description: 'The utilization of waste minimization by the company' })
    utilizationOfWasteMinimization: string;

    @ApiProperty({ example: 'Yes', description: 'Whether the company\'s products are recyclable' })
    recyclibility: string;

    @ApiProperty({ example: '90%', description: 'The efficiency of the waste management system' })
    efficiencyOfWasteManagementSystem: string;

    @ApiProperty({ example: '70%', description: 'The percentage of recycled components used by the company' })
    percentageOfRecycledCompoents: string;

    @ApiProperty({ example: 'Yes', description: 'Whether the company uses biodegradable materials' })
    userOfBiodegradableMaterials: string;

    @ApiProperty({ example: 'Small', description: 'The size of packaging materials used by the company' })
    packagingSizeMaterials: string;

    @ApiProperty({ example: 'Yes', description: 'Whether the company uses secondary resized materials' })
    useOfSecondaryResizedMaterials: string;
}
