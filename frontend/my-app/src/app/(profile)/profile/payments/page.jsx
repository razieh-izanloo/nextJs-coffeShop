"use client";

import { useGetUser } from "@/hooks/useAuth";
import { PaymentTable } from "./table";

function Payments() {
  const { data, isLoading } = useGetUser();
  const { payments } = data || {};

  if (isLoading) return <>loading...</>;

  return (
    <div>
      <h1>سفارشات کاربر</h1>
      <PaymentTable payments={payments} />
    </div>
  );
}
export default Payments;
