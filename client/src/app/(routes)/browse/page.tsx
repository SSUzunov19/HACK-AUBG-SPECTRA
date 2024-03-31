"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getManufacturers } from "@/app/api/manufacturerApi";

import Container from "@/components/ui/container";

function calculateScore(manufacturer: any, weights_perfect_values: any) {
  let total_weighted_deviation = 0;
  let total_weight = 0;

  // Assuming you have an array of property names that align with weights_perfect_values
  const propertyNames = [
    "renewableResources",
    "recyclableResources",
    "sustainableResources", // ... and so on for each corresponding weight
  ];

  propertyNames.forEach((propertyName, i) => {
    const response = manufacturer[propertyName];
    const [weight, perfect_value] = weights_perfect_values[i];

    let deviation = 0;
    let max_deviation = 0;

    if (perfect_value === null) {
      // Handle nulls if needed, otherwise skip this property
    } else if (typeof perfect_value === "boolean") {
      deviation = response !== perfect_value ? weight : 0;
      max_deviation = weight;
    } else {
      deviation = Math.abs(response - perfect_value);
      max_deviation = Math.abs(100 - perfect_value);
    }

    if (max_deviation !== 0) {
      let normalized_weighted_deviation = (weight * deviation) / max_deviation;
      total_weighted_deviation += normalized_weighted_deviation;
    }
    total_weight += weight;
  });

  return total_weight > 0
    ? 10 * (1 - total_weighted_deviation / total_weight)
    : 0;
}

function BrowsePage() {
  const router = useRouter();

  const [manufacturersWithRatings, setManufacturersWithRatings] = useState([]);

  useEffect(() => {
    async function fetchAndCalculateRatings() {
      try {
        const manufacturers = await getManufacturers(); // Adjust this to your actual API call
        console.log(manufacturers);
        const calculatedRatings = manufacturers.map((manufacturer: any) => ({
          ...manufacturer,
          rating: calculateScore(manufacturer, weights_perfect_values),
        }));
        setManufacturersWithRatings(calculatedRatings);
      } catch (error) {
        console.error("Failed to fetch manufacturers:", error);
      }
    }

    fetchAndCalculateRatings();
  }, []); // Empty dependency array ensures this runs once on mount

  function sendManifacturerData(manufacturer: any) {
    router.push(`/browse/${manufacturer.id}`);
  }

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

  return (
    <Container>
      <h1 className="text-[56px] font-bold text-white text-center mt-8">
        Browse Manufacturers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {manufacturersWithRatings.map((manufacturer: any) => (
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
