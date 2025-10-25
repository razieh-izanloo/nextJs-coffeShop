import {
  addProdcut,
  getOnProductBySlug, 
  getProducts,
  removeProduct,
  updateProduct,
} from "@/services/productServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetProducts = (qs, cookies) =>
  useQuery({
    queryKey: ["get-products", qs],
    queryFn: ({ queryKey }) => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, query] = queryKey;
      return getProducts(query, cookies);
    },
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddProduct = () => {
  return useMutation({ mutationFn: addProdcut });
};

export const useUpdateProduct = () => {
  return useMutation({ mutationFn: updateProduct });
};

export const useRemoveProduct = () => {
  return useMutation({ mutationFn: removeProduct });
};

export const useGetProductById = (id) =>
  useQuery({
    queryKey: ["get-product", id],
    queryFn: () => getOnProductBySlug(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
