import React from "react";
import { ProductSummaryProps } from "@/types/checkoutTypes";

const ProductSummary: React.FC<ProductSummaryProps> = ({ cartItems }) => {
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Преглед на поръчката</h2>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            {item.imgUrl && item.imgUrl.length > 0 && (
              <img
                src={item.imgUrl[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
            )}
            <div className="flex-grow">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500">
                {item.quantity} x {item.price} лв.
              </div>
            </div>
            <div className="text-lg font-semibold">
              {item.quantity * item.price} лв.
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-lg font-semibold">
        Общо: <span className="float-right">{totalCost} лв.</span>
      </div>
    </div>
  );
};

export default ProductSummary;
