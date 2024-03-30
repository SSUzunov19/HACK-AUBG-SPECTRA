import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/productTypes";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const navigateToProduct = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="cursor-pointer" onClick={navigateToProduct}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {product.imgUrl && product.imgUrl.length > 0 && (
          <img src={product.imgUrl[0]} alt={product.name} className="w-full" />
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {product.price} лв.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
