"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useGetProducts } from "@/hooks/useProducts";
import { useAddNewCoupon } from "@/hooks/admin/useCoupons";
import {CouponForm} from "@/components/couponForm";

export default function page() {
  const { data } = useGetProducts();
  const { products } = data || {};
  const [formData, setFormData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });
  const [type, setType] = useState("percent");
  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const { isLoading, mutateAsync } = useAddNewCoupon();
  const router = useRouter();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        type,
        expireDate: new Date(expireDate).toISOString(),
        productIds: productIds.map((p) => p._id),
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">اضافه کردن کد تخفیف</h1>
      <CouponForm
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        type={type}
        setType={setType}
        formData={formData}
        isLoading={isLoading}
        onChangeSelect={setProductIds}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        options={products}
      />
    </div>
  );
}
