import ProductSort from "./productSort";
import ShopByCategory from "./ShopByCategory";
import ProductFilter from "./ProductFilter";
import EbookStock from "./EbookStock";

const ProductLeftSideFunc = (handleFilterChange) => {
    return (
        <div className="flex flex-col gap-10">
            <ProductSort handleFilterChange={handleFilterChange}></ProductSort>
            <EbookStock></EbookStock>
            <ShopByCategory></ShopByCategory>
            <ProductFilter></ProductFilter>

        </div>
    );
};

export default ProductLeftSideFunc;