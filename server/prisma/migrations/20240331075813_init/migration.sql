-- CreateEnum
CREATE TYPE "Role" AS ENUM ('COMPANY', 'ADMIN', 'COMPANY_ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "imgUrl" TEXT,
    "about" TEXT,
    "facebook" TEXT,
    "linkedin" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "role" "Role" DEFAULT 'COMPANY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyIndex" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "renewableResources" INTEGER NOT NULL,
    "recyclableResources" INTEGER NOT NULL,
    "sustainableResources" INTEGER NOT NULL,
    "waterPerDay" INTEGER NOT NULL,
    "energyPerDay" INTEGER NOT NULL,
    "landOnNaturalCover" INTEGER NOT NULL,
    "renewableEnergy" INTEGER NOT NULL,
    "ghgProduct" INTEGER NOT NULL,
    "energyEfficiency" INTEGER NOT NULL,
    "waste" INTEGER NOT NULL,
    "recycledWaste" INTEGER NOT NULL,
    "wasteMinimization" INTEGER NOT NULL,
    "recyclability" INTEGER NOT NULL,
    "wasteEfficiency" INTEGER NOT NULL,
    "replacableComponents" INTEGER NOT NULL,
    "biodegradableMaterials" INTEGER NOT NULL,
    "packageSizeOptimization" INTEGER NOT NULL,
    "secondaryPackageMaterials" INTEGER NOT NULL,
    "companyCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyIndex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_companyName_key" ON "User"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyIndex_name_key" ON "CompanyIndex"("name");
