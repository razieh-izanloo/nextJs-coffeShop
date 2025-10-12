import { ProductFilter } from "./productsFilter";
import { ProductsSort } from "./productsSort";

export const CategorySideBar = ({ categories }) => {
  return (
    <div className="col-span-1">
      <ProductFilter categories={categories} />
      <ProductsSort />
    </div>
  );
};
