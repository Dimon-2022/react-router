import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  return (
    <div>
      Cart
      {/* <Link to={"/thanks"}>
        <button onClick={redirect}>Order</button>
      </Link> */}

      <button onClick={()=>navigate("/thanks")}>Order</button>
    </div>
  );
}

export default Cart;
