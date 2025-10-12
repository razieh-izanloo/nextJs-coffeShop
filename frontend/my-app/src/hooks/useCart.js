import { useMutation } from "@tanstack/react-query";
import { addToCart } from "@/services/cartServices";

export const useAddToCart = () =>
  useMutation({
    mutationFn: addToCart,
  });
