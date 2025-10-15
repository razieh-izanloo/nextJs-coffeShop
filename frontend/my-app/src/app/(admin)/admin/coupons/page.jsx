"use client";

import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";
import { useGetCoupons } from "@/hooks/admin/useCoupons";
import {CouponListTable} from "./couponListTable";

function page() {
  const { isLoading, data } = useGetCoupons();
  const { coupons } = data || {};
  if (isLoading) return <>loading...</>;
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">کد های تخفیف</h1>
        <Link
          href="/admin/coupons/add"
          className="font-bold text-primary-900 flex items-center gap-x-2"
        >
          <HiPlusCircle className="w-6 h-6" /> <span>اضافه کردن کد تحفیف</span>
        </Link>
      </div>
      <CouponListTable coupons={coupons} />
    </div>
  );
}
export default page;
