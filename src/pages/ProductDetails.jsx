import { useParams } from "react-router-dom";
import { products } from "../data/data.js";
import NotFound from "./NotFound.jsx";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>
        {product.name}{" "}
        <span style={{ color: "magenta" }}>{product.price}$</span>
      </h1>
      <p>{product.description ? product.description : "Пока нет описания"}</p>
      <img src={product.img} alt={product.name} />
    </div>
  );
}

export default ProductDetails;
