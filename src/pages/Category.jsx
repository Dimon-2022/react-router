import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Category</h1>
      <ul style={{ display: "flex" }}>
        {products
          .filter((product) => product.categoryId === id)
          .map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} style={{width:"150px"}}/>
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
