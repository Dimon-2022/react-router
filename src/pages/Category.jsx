import { Link, useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
import ProductNotFound from "../components/ProductNotFound";

function Category() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");// asc or desc

  let categoryProducts = products.filter(
    (product) => product.categoryId === id
  )
  
  if(sort === "asc"){
    categoryProducts.sort((a,b)=>a.price-b.price);
  }
  else if(sort === "desc"){
    categoryProducts.sort((a,b)=>b.price-a.price);
  }


  if(!categoryProducts.length){
    return <ProductNotFound/>
  }

  return (
    <div>
      <h1>Category</h1> <input type="text" onChange={(e)=>{setSearchParams({sort: e.target.value})}}/>
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
