"use client";
import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";

export const Header = () => {
  const { data, isLoading, error } = useGetUser();

  const { user, cart } = data || {};
  return (
    <ul className={isLoading ? "blur-sm opacity-70" : ""}>
      <li>{data ? <Link href="/profile">{user.name}</Link> : "ورود"}</li>
      <li>خانه</li>
      <li>محصولات</li>
      <li>
        <Link href="/profile">پروفایل</Link>
      </li>
      <li>ادمین</li>
      <li>
        <Link href="/cart">
          سبد خرید
          <span>{cart ? cart.payDetail.productIds.length : 0}</span>
        </Link>
      </li>
    </ul>
  );
};
