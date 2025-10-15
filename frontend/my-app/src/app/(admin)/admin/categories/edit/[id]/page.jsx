"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CategoryForm, categoryTypes } from "@/components/categoryForm";
import {
  useGetCategoryById,
  useUpdateCategory,
} from "@/hooks/admin/useCategories";

const includesCategoryKey = ["title", "englishTitle", "description"];

function EditCategoryPage() {
  const { id } = useParams();
  const { data, isLoading: isLoadingCategory } = useGetCategoryById(id);
  const { category } = data || {};
  const [formData, setFormData] = useState({});
  const [selectedType, setSelectedType] = useState("");
  const { isLoading, mutateAsync } = useUpdateCategory();
  const router = useRouter();

  useEffect(() => {
    if (category) {
      setSelectedType(categoryTypes.find((c) => c.value === category.type));
      let updateCategory = {};
      includesCategoryKey.forEach(
        (item) => (updateCategory[item] = category[item])
      );
      setFormData(updateCategory);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        data: {
          ...formData,
          type: selectedType.value,
        },
        id: category._id,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoadingCategory) return <>loading...</>;
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">ویرایش دسته بندی جدید</h1>
      <CategoryForm
        category={formData}
        handleChange={handleChange}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        selectedType={categoryTypes.find((c) => c.value === category.type)}
        setSelectedType={setSelectedType}
      />
    </div>
  );
}
export default EditCategoryPage;
