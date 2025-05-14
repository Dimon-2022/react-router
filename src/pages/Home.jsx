import { Link, NavLink } from "react-router-dom";
import { categories } from "../data/data";

function Home() {
  console.log(categories);

  return (
    <div>
      <h1>Categories</h1>
      <ul style={{display: "flex"}}>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`category/${cat.id}`}>
              <img src={cat.img} alt={cat.name} style={{width:"150px"}} />
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
