import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      It is my homepage
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"about"}>About</NavLink>
      <NavLink to={"cart"}>Cart</NavLink>
    </div>
  );
}

export default Home;
