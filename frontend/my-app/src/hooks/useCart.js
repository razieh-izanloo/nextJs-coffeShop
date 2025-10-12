import { useMutation } from "@tanstack/react-query";
import { addToCart, decrementFromCart } from "@/services/cartServices";

export const useAddToCart = () =>
  useMutation({
    mutationFn: addToCart,
  });

export const useDecrementFromCart = () =>
  useMutation({
    mutationFn: decrementFromCart,
  });
