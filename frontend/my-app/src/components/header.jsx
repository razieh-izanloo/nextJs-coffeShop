"use client";
import Link from "next/link";
import { useGetUser } from "@/hooks/useAuth";
import Image from "next/image";
import { useRef, useState } from "react";
import { useIsVisible } from "../hooks/useIsVisible";

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

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsVisible(1024);
  const ref = useRef();

  return (
    <>
      <div
        className={isOpen ? "h-screen w-full bg-modal absolute top-0" : ""}
        onClick={(e) => {
          if (!ref.current.contains(e.target)) {
            setIsOpen(false);
          }
        }}
      ></div>
      <div
        className={`fixed top-0 backdrop-blur-2xl h-14 flex justify-center w-full  z-1 ${
          isLoading ? "blur-sm opacity-70" : ""
        }`}
      >
        <header className="flex items-start justify-between container-xl w-full lg:items-center text-[17px] md:text-[20px] font-normal text-secondary-200 lg:px-4  pt-0.5 lg:pt-2">
          <div className="lg:flex lg:items-center lg:gap-x-2" ref={ref}>
            <div className="flex gap-x-3">
              <button
                className="lg:hidden"
                disabled={isOpen}
                onClick={() => setIsOpen(true)}
                type="button"
              >
                <Image
                  src="/images/icons/menu.svg"
                  width="28"
                  height="28"
                  alt="menu"
                  className="cursor-pointer"
                />
              </button>
              <Link href="/">
                {isMobile ? (
                  <Image
                    src="/images/logo.png"
                    className="mt-2"
                    width="35"
                    height="35"
                    alt="logo"
                  />
                ) : (
                  <Image
                    src="/images/logo-text.png"
                    className=" mt-2 lg:mt-0"
                    width="117"
                    height="34"
                    alt="logo"
                  />
                )}
              </Link>
            </div>
            <div
              className={
                isOpen
                  ? "absolute top-0 shadow-2xl h-screen px-3 bg-white py-4 min-w-2xs z-1 opacity-100 transition-opacity ease-in-out delay-300"
                  : "opacity-0 lg:opacity-100 lg:static lg:flex gap-x-3 lg:shadow-none lg:h-fit lg:px-0"
              }
            >
              <div className="border-b-1 border-b-[#c9c9ce] lg:hidden pb-1">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <Image
                      src="/images/logo-text.png"
                      className="mt-2 lg:mt-0"
                      width="117"
                      height="34"
                      alt="logo"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-secondary-200 text-[14px] cursor-pointer"
                  >
                    X
                  </button>
                </div>
              </div>
              <nav className="flex flex-col gap-3 lg:gap-x-6  lg:flex-row py-5 lg:py-0">
                {navItems.map((item) => (
                  <Link
                    href={item.link}
                    key={item.label}
                    className="flex gap-x-1 items-center"
                  >
                    {/* <Image
                      src={item.icon}
                      alt={item.label}
                      width="15"
                      height="15"
                    /> */}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Link href="/cart" className="relative">
              <Image
                src="/images/icons/buy.svg"
                alt="buy"
                width="25"
                height="25"
              />
              {cart && (
                <span className="absolute top-1 right-[-8] text-white text-[9px] bg-blue-500 rounded-full w-5 h-5 flex justify-center items-center">
                  {cart.payDetail.productIds.length}
                </span>
              )}
            </Link>
            {data ? (
              <Link
                href="/profile"
                className="text-truncate max-w-16"
              >
                {user.name}
              </Link>
            ) : (
              "ورود"
            )}
          </div>
        </header>
      </div>
    </>
  );
};
