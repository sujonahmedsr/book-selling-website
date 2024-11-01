import ProductSort from "./productSort";
import ShopByCategory from "./ShopByCategory";
import ProductFilter from "./ProductFilter";
import EbookStock from "./EbookStock";

const ProductLeftSideFunc = () => {
    return (
        <div className="flex flex-col gap-10">
            <ProductSort></ProductSort>
            <ShopByCategory></ShopByCategory>
            <ProductFilter></ProductFilter>
            <EbookStock></EbookStock>
            
        </div>
    );
};

export default ProductLeftSideFunc;