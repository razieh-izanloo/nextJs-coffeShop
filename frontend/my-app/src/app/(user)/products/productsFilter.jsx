"use client";

import { CheckBox } from "@/components/checkBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const ProductFilter = ({ categories }) => {
  const searchParams = useSearchParams();
  const [selectCategories, setSelectCategories] = useState(
    searchParams.getAll("category")[0]?.split(",") || []
  );
  const router = useRouter();
  const pathname = usePathname();

  const categoryHandler = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const params = new URLSearchParams(searchParams);

    let updateCategories = selectCategories;
    updateCategories = checked
      ? [...selectCategories, value]
      : selectCategories.filter((item) => item !== value);

    setSelectCategories(updateCategories);

    if (!checked && !updateCategories.length) {
      router.push(pathname);
    } else {
      params.set("category", updateCategories);
      router.push(pathname + "?" + params.toString());
    }
  };
  
  return (
    <ul>
      <li>دسته بندی ها</li>
      {categories.map((item) => (
        <CheckBox
          key={item._id}
          value={item.englishTitle}
          id={item._id}
          name="product-categories"
          onChange={categoryHandler}
          label={item.title}
          checked={selectCategories.includes(item.englishTitle)}
        />
      ))}
    </ul>
  );
};
