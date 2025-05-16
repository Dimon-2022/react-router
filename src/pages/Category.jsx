import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
import ProductNotFound from "../components/ProductNotFound";

function Category() {
  const { id } = useParams();

  const {pathname} = useLocation();
  console.log(pathname);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort"); // asc or desc
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : Infinity;

  function handleChange(e) {
    const value = e.target.value;

    setSearchParams(value ? { maxPrice: value } : {});
  }

  let categoryProducts = products.filter(
    (product) => product.categoryId === id && product.price <= maxPrice
  );

  if (sort === "asc") {
    categoryProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    categoryProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <h1>Category</h1>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="sort-price">Sort by price: </label>
        <input
          id="sort-price"
          type="text"
          onChange={(e) => {
            setSearchParams({ sort: e.target.value });
          }}
        />
      </div>

      <label htmlFor="filter-max-price">Filter by max price:</label>
      <input id="filter-max-price" type="text" onChange={handleChange} value={searchParams.get("maxPrice") || ""} />
      <ul style={{ display: "flex" }}>
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "150px" }}
              />
              {product.name}
            </Link>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
