import queryString from "query-string";
import Link from "next/link";
import { getCategories } from "@/services/categoryServices";
import { getProducts } from "@/services/productServices";
import { toLocaleDateString } from "@/utils/toLocaleDate";
import { toStringCookies } from "@/utils/toStringCookies";
import { CategorySideBar } from "./categorySideBar";
import { AddToCart } from "./[slug]/addToCart";
import { LikeProduct } from "./productLike";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic"; // or use fetch with "no-store"

const ProdutcsPage = async ({ searchParams }) => {
  const params = await searchParams;

  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);

  // const { products } = await getProducts(queryString.stringify(params));
  // const { categories } = await getCategories();
  //or:
  const productsPromise = getProducts(queryString.stringify(params), strCookies);
  const categoryPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        <CategorySideBar categories={categories} />
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => {
              return (
                <div
                  className="col-span-1 border rounded-xl shadow-md p-4"
                  key={product._id}
                >
                  <h2 className="font-bold text-xl mb-4">{product.title}</h2>
                  <div className="mb-4">
                    <span>تاریخ ساختن: </span>
                    <span className="font-bold">
                      {toLocaleDateString(product.createdAt)}
                    </span>
                  </div>
                  <Link
                    className="text-primary-900 font-bold mb-4 block"
                    href={`/products/${product.slug}`}
                  >
                    مشاهده محصول
                  </Link>
                  <LikeProduct product={product} />
                  <AddToCart product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutcsPage;
