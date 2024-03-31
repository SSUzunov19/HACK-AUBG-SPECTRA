import React from "react";
import Container from "@/components/ui/container";

function Manufacturer() {
  const manufacturer = {
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
  };

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
      <h1 className="text-[56px] font-bold text-white text-center mt-8">
        {manufacturer.name}
      </h1>
      <div className="flex justify-center mt-8 mb-8">
        <table className="text-[30px] text-white text-start w-auto border-[2px] rounded-lg">
          <tbody>
            {Object.entries(manufacturer).map(
              ([key, value]) =>
                key !== "name" && (
                  <tr key={key} className="border-2 hover:bg-gray-700">
                    <td className="pr-[200px] font-bold py-2 pl-4">
                      {formatKey(key)}
                    </td>
                    <td className="text-end py-2 px-10">{value}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Manufacturer;
