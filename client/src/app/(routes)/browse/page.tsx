"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Container from "@/components/ui/container";

function calculateScore(manufacturer: any, weights_perfect_values: any) {
  let total_weighted_deviation = 0;
  let total_weight = 0;

  for (let [i, [weight, perfect_value]] of weights_perfect_values.entries()) {
    const response = manufacturer[Object.keys(manufacturer)[i + 2]]; // Adjust index based on manufacturer object structure
    let deviation, max_deviation;

    if (perfect_value === null) {
      deviation = max_deviation = 0;
    } else if (typeof perfect_value === "boolean") {
      deviation = response !== perfect_value ? weight : 0;
      max_deviation = weight;
    } else {
      deviation = Math.abs(response - perfect_value);
      max_deviation = Math.abs(100 - perfect_value);
    }

    let normalized_weighted_deviation =
      max_deviation === 0 ? 0 : (weight * deviation) / (weight * max_deviation);
    total_weighted_deviation += normalized_weighted_deviation;
    total_weight += weight;
  }

  return total_weight === 0
    ? 0
    : 10 * (1 - total_weighted_deviation / total_weight);
}

function BrowsePage() {
  const router = useRouter();

  function sendManifacturerData(manufacturer: any) {
    router.push(
      `/browse/${manufacturer.name}
      )}`
    );
  }

  const manufacturers = [
    {
      name: "Manufacturer 1",
      location: "Location 1",
      renewableResources: 70,
      recyclableResources: 90,
      sustainableResources: 60,
      waterPerDay: 450,
      energyPerDay: 5500,
      landOnNaturalCover: 75,
      renewableEnergy: 50,
      ghgProduct: 4.5,
      energyEfficiency: 75,
      waste: 40,
      recycledWaste: 60,
      wasteMinimization: 1, // True
      recyclability: 80,
      wasteEfficiency: 85,
      replacableComponents: 90,
      biodegradableMaterials: 1, // True
      packageSizeOptimization: 1, // True
      secondaryPackageMaterials: 1, // True
    },
    {
      name: "Manufacturer 2",
      location: "Location 2",
      renewableResources: 70,
      recyclableResources: 90,
      sustainableResources: 60,
      waterPerDay: 450,
      energyPerDay: 5500,
      landOnNaturalCover: 75,
      renewableEnergy: 50,
      ghgProduct: 4.5,
      energyEfficiency: 75,
      waste: 40,
      recycledWaste: 60,
      wasteMinimization: 1, // True
      recyclability: 80,
      wasteEfficiency: 85,
      replacableComponents: 90,
      biodegradableMaterials: 1, // True
      packageSizeOptimization: 1, // True
      secondaryPackageMaterials: 1, // True
    },
  ];

  const weights_perfect_values = [
    [8, 60],
    [12, 80],
    [8, 70],
    [0.5, null], // Assuming 0 is your intended perfect value here and not a placeholder
    [0.5, null], // Assuming 0 is your intended perfect value here and not a placeholder
    [2, 80],
    [15, 60],
    [20, 5],
    [10, 70],
    [4, null], // Assuming 0 is your intended perfect value here and not a placeholder
    [6, 50],
    [10, null], // True represented as 1, but you'll need to handle boolean logic in your function
    [6, 80],
    [10, 80],
    [8, 90],
    [1, 1], // True represented as 1, adjust in your calculation for boolean logic
    [1, 1], // True represented as 1, adjust in your calculation for boolean logic
    [2, 1], // True represented as 1, adjust in your calculation for boolean logic
  ];

  const manufacturersWithRatings = manufacturers.map((manufacturer) => ({
    ...manufacturer,
    rating: calculateScore(manufacturer, weights_perfect_values),
  }));

  return (
    <Container>
      <h1 className="text-[56px] font-bold text-white text-center mt-8">
        Browse Manufacturers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {manufacturersWithRatings.map((manufacturer) => (
          <div
            onClick={() => sendManifacturerData(manufacturer)}
            key={manufacturer.name}
            className="no-underline"
          >
            <div className="bg-white border border-gray-300 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 ease-in-out hover:border-green-200 hover:border-[3px]">
              <div className="bg-gray-100 p-12 flex justify-center items-center">
                <p className="text-lg font-semibold text-black">
                  {manufacturer.location}
                </p>
              </div>
              <div className="flex p-4 items-center text-center justify-between">
                <h2 className="font-bold text-xl text-black">
                  {manufacturer.name}
                </h2>
                <p
                  className={`text-lg font-bold ${
                    manufacturer.rating * 10 > 50
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {`${(Number(manufacturer.rating) * 10).toFixed(2)}%`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default BrowsePage;
