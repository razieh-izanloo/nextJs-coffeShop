"use client";

import { useGetProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

const DetailProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById(id);
  const { product } = data || {};

  if (isLoading) return <>loading</>;
  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">{product.title}</h1>
    </div>
  );
};
export default DetailProductPage;
