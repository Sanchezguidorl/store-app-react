import { useState, useEffect, useRef } from "react";
import { useGetProducts } from "../customHooks/CustomHooks";
import { NavLink } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const { productsData, error } = useGetProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchContainerRef = useRef(null);

  useEffect(() => {
    if (productsData) {
      const filtered = productsData.filter((product) => {
        const productTitleUpper = product.title.toUpperCase();
        const searchInputUpper = searchInput.toUpperCase();
        return searchInput.length > 0
          ? productTitleUpper.includes(searchInputUpper)
          : false;
      });
      setFilteredProducts(filtered);
    }
  }, [searchInput, productsData]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setShowResults(e.target.value !== "");
  };

  const handleContainerBlur = (e) => {
    // Verificar si el click fue realizado fuera del div de resultados
    if (!searchContainerRef.current.contains(e.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleContainerBlur);
    return () => {
      document.removeEventListener("click", handleContainerBlur);
    };
  }, []);

  return (
    <div ref={searchContainerRef} className="search-container ms-2">
      <input
        type="text"
        onChange={handleChange}
        id="searchInput"
        className="p-2 rounded-1 mt-1 mt-md-0"
        placeholder="Buscar..."
        value={searchInput}
      />

      {
      showResults &&
      <>{ error ?
      <div className="px-1 w-100 position-absolute top-100 w-100 bg-secondary py-3 text-center text-white rounded border"><h6>Error: products are not available at this time. </h6></div>
:
         
            <div
              id="searchResults"
              className="search-results position-absolute top-100 w-100 bg-white border"
            >
              {filteredProducts &&
                filteredProducts.map((product) => (
                  <NavLink
                    className="p-2 text-break anchor"
                    key={product.title}
                    style={{ cursor: "pointer", color: "blue" }}
                    to={`/product/${product.id}`}
                  >
                    {product.title}
                  </NavLink>
                ))}
            </div>
}</>
        }
    </div>
  );
}

export default Search;
