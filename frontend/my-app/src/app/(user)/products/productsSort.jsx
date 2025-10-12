"use client";

import { useState } from "react";
import { RadioInput } from "@/components/radioInput";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const ProductsSort = () => {
  const sortOptions = [
    { id: 1, value: "latest", label: "جدیدترین" },
    { id: 2, value: "earliest", label: "قدیمی ترین" },
    { id: 3, value: "popular", label: "محبوب ترین" },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const params = new URLSearchParams(searchParams);

  const radioHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    params.set("sort", value);
    router.push(pathname + "?" + params);
  };

  return (
    <>
      <p>مرتب سازی</p>
      {sortOptions.map((item) => (
        <RadioInput
          key={item.id}
          id={item.id}
          label={item.label}
          name="product-sort"
          value={item.value}
          onChange={radioHandler}
          checked={sort === item.value}
        />
      ))}
    </>
  );
};
