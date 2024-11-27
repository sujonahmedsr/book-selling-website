
const PriceRange = () => {
    return (
        <div>
            <h2>Filter by Price</h2>

            {/* Price Range Inputs */}
            <div className="grid grid-cols-2">
                <div>
                    <label>Min Price:</label>
                    <input
                        type="number"
                        id="min"
                        name="min"
                        // value={priceRange.min}
                        // onChange={handleInputChange}
                        className="border p-2"
                    />
                </div>
                <div>
                    <label>Max Price:</label>
                    <input
                        type="number"
                        id="max"
                        name="max"
                        // value={priceRange.max}
                        // onChange={handleInputChange}
                        className="border p-2"
                    />
                </div>
            </div>

            
        </div>
    );
};

export default PriceRange;