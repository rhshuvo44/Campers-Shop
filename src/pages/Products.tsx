import ProductCard from "../components/product/ProductCard";
import SearchingAndFiltering from "../components/product/SearchingAndFiltering";

const Products = () => {
  return (
    <div className="px-20 py-10">
      <SearchingAndFiltering />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
