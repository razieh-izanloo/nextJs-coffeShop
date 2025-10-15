"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { ProductForm } from "@/components/productForm";
import { useGetCategories } from "@/hooks/admin/useCategories";
import { useAddProduct } from "@/hooks/admin/useProducts";

export const addProductPage = () => {
  const { isLoading, mutateAsync } = useAddProduct();
  const { data } = useGetCategories();
  const { categories } = data || {};
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    offPrice: "",
    discount: "",
    countInStock: "",
    imageLink: "",
  });
  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory._id,
      });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mb-10">
      <h1 className="mb-4 font-bold text-xl">اضافه کردن محصول</h1>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        tags={tags}
        setTags={setTags}
        isLoading={isLoading}
        productData={formData}
        productDataOnChange={handChange}
      />
    </div>
  );
};
export default addProductPage;
