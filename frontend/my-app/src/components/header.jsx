"use client";
import Link from "next/link";
import { useGetUser } from "@/hooks/useAuth";
import Image from "next/image";

export const Header = () => {
  const { data, isLoading } = useGetUser();

  const { user, cart } = data || {};

  const navItems = [
    { label: "خانه", icon: "/images/icons/home.svg", link: "/" },
    {
      label: "محصولات",
      icon: "/images/icons/cctv-smart.svg",
      link: "/products",
    },
    {
      label: "دوره های آموزشی",
      icon: "/images/icons/book.svg",
      link: "/cousers",
    },
    {
      label: "استخدامی",
      icon: "/images/icons/employment.svg",
      link: "/employment",
    },
    {
      label: "ارتباط با ما",
      icon: "/images/icons/contact-us.svg",
      link: "/contact-us",
    },
  ];

  return (
    <header
      className={`flex justify-between items-center sticky top-0 backdrop-blur-2xl h-14 text-[17px] font-normal text-secondary-200 ${
        isLoading ? "blur-sm opacity-70" : ""
      }`}
    >
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            href={item.link}
            key={item.label}
            className="flex gap-x-1 items-center"
          >
            <Image src={item.icon} alt={item.label} width="18" height="18" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-x-1">
        <Link href="/cart" className="relative">
          <Image src="/images/icons/buy.svg" alt="buy" width="25" height="25" />
          {cart && (
            <span className="absolute top-0 right-[-7] text-white text-[9px] bg-red-500 rounded-full w-5 h-5 flex justify-center items-center">
              {cart.payDetail.productIds.length}
             </span>
          )}
        </Link>
        {data ? <Link href="/profile">{user.name}</Link> : "ورود"}
      </div>
    </header>
  );
};
