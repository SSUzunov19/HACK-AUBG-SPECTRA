export class UpdateCompanyIndexDto {
    companyName?: string;
    location?: string;
    renewableResources?: number;
    recyclableResources?: number;
    sustainableResources?: number;
    waterPerDay?: number;
    energyPerDay?: number;
    landOnNaturalCover?: number;
    renewableEnergy?: number;
    ghgProduct?: number;
    energyEfficiency?: number;
    waste?: number;
    recycledWaste?: number;
    wasteMinimization?: number;
    recyclability?: number;
    wasteEfficiency?: number;
    replacableComponents?: number;
    biodegradableMaterials?: number;
    packageSizeOptimization?: number;
    secondaryPackageMaterials?: number;
}
