"use client";

import { useGetProducts } from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const LatestProducts = () => {
  const { data } = useGetProducts("sort=latest");

  const ref = useRef(null);

  useEffect(() => {
    const parentCards = ref.current;
    if (!parentCards) return;

    let scrollLeft = 0;
    if (parentCards.clientWidth > +scrollLeft) {
      console.log(scrollLeft, parentCards.clientWidth);

      const interval = setInterval(() => {
        scrollLeft = scrollLeft - 320;
        parentCards.scrollLeft = scrollLeft;
        console.log("scroll");
      }, 3000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [ref, data]);

  if (!data) return null;
  console.log(ref);

  return (
    <div className="overflow-x-auto scroll-swipe" ref={ref}>
      <div className="flex gap-2 py-4 min-w-max">
        {data?.products.map((item) => (
          <div
            key={item._id}
            className="relative my-4 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="mx-4 -mt-6 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#6c86fd] p-2.5">
              <div className="relative w-full h-full">
                <Image
                  src={item.imageLink}
                  alt={item.title}
                  fill
                  className="object-cover right-4 max-w-72 max-h-40"
                />
              </div>
            </div>
            <div className="p-6">
              <strong className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.title}
              </strong>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-truncate">
                {item.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/"
                className="rounded-lg bg-[#6c86fd] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                مشاهده
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
