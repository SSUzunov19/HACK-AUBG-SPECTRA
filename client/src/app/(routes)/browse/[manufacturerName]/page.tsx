"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { getCompanyIndexById } from "@/app/api/manufacturerApi";
import Container from "@/components/ui/container";

interface ManufacturerData {
  id: string;
  name: string;
  location: string;
  // ... all other properties
}

function Manufacturer() {
  const id = usePathname().split("/").pop();
  const [manufacturer, setManufacturer] = useState<ManufacturerData | null>(
    null
  );

  useEffect(() => {
    if (id) {
      // Make sure 'id' is not undefined or null
      getCompanyIndexById(id)
        .then((data) => {
          setManufacturer(data);
        })
        .catch((error) => {
          console.error("Failed to fetch manufacturer:", error);
          // Handle error state appropriately
        });
    }
  }, [id]);

  // Function to format the key string
  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1") // Insert space before capital letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
      .replace(/PerDay/g, " per day") // Replace 'PerDay' with ' per day'
      .replace(/On/g, " on") // Replace 'On' with ' on'
      .replace(/Ghg/g, "GHG"); // Specific case for 'GHG'
  };

  return (
    <Container>
      {manufacturer && (
        <h1 className="text-[56px] font-bold text-white text-center mt-8">
          {manufacturer.name}
        </h1>
      )}
      <div className="flex flex-col items-center mt-8 mb-8">
        {manufacturer && (
          <table>
            <tbody>
              {Object.entries(manufacturer)
                .filter(
                  ([key]) =>
                    ![
                      "id",
                      "name",
                      "companyCreatedAt",
                      "companyUpdatedAt",
                    ].includes(key)
                )
                .map(
                  ([key, value]) =>
                    key !== "name" && (
                      <tr
                        key={key}
                        className="border-2 hover:bg-gray-700 text-[20px]"
                      >
                        <td className="font-bold py-2 pl-4">
                          {formatKey(key)}
                        </td>
                        <td className="py-2 px-10">{value}</td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        )}
      </div>
    </Container>
  );
}

export default Manufacturer;
