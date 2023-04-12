import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Super Carlist</h1>
      <Link to="/">Home</Link>
    </header>
  );
};

export default Header;
