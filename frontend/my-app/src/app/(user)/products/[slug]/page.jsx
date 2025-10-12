import { getProducts } from "@/services/productServices";
import { getOnProductBySlug } from "@/services/productServices";
import {
  toPersianNumbersWithComma,
  toPersianNumbers,
} from "@/utils/toPersianNumber";
import { AddToCart } from "./addToCart";

//If there is a product other than the products being generateStaticParams, show a 404, not an error.:
export const dynamicParams = false;

export const dynamic = "force-static"; //SSG or {cache: 'force-cache'}

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

const ProductDetailPage = async ({ params }) => {
  const { slug } = await params;
  const { product } = await getOnProductBySlug(slug);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">{product.title}</h1>
      <p className="mb-6">{product.description}</p>
      <p className="mb-6">
        قیمت محصول :{" "}
        <span className={`${product.discount ? "line-through" : "font-bold"}`}>
          {toPersianNumbersWithComma(product.price)}
        </span>
      </p>
      {!!product.discount && (
        <div className="flex items-center gap-x-2 mb-6">
          <p className="text-xl font-bold">
            قیمت با تخفیف : {toPersianNumbersWithComma(product.offPrice)}
          </p>
          <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
            {toPersianNumbers(product.discount)} %
          </div>
        </div>
      )}
      <AddToCart product={product} />
    </div>
  );
};

export default ProductDetailPage;
