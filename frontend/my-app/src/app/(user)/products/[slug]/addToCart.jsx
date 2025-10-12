"use client";
import { useGetUser } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAddToCart } from "@/hooks/useCart";
import Link from "next/link";

export const AddToCart = ({ product }) => {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
  const router = useRouter();

  const { isPending, mutateAsync } = useAddToCart;
  const queryClient = useQueryClient();

  const addToCartHandler = async () => {
    if (user) {
      try {
        const { message } = await mutateAsync(product._id);
        toast.success(message);
        queryClient.invalidateQueries({ queryKey: ["get-user"] });
      } catch (err) {
        toast.error(err?.response?.data);
      }
    } else {
      toast.error("ابتدا لاگین کنید");
      router.push("/auth");
      return;
    }
  };

  const isInCart = (user, product) => {
    if (!user) return false;
    return user.cart?.products.some((p) => p.productId === product._id);
  };

  return (
    <div>
      {isInCart(user, product) ? (
        <Link href="/cart" className="text-primary-900 font-bold">
          ادامه سفارش
        </Link>
      ) : isLoading ? (
        <>در حال بارگذاری...</>
      ) : (
        <button
          onClick={addToCartHandler}
          disabled={isPending}
          className="btn btn--primary py-2"
        >
          اضافه کردن به سبد خرید
        </button>
      )}
    </div>
  );
};
