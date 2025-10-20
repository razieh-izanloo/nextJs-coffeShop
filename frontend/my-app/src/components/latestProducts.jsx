"use client";

import { useGetProducts } from "@/hooks/useProducts"

export const LatestProducts = () => {
    const products = useGetProducts("sort=latest");
    console.log(products)

    return (
        <></>
    )
}