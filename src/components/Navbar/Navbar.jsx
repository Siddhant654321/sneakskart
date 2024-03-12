import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbarVisibility = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const handleNavbarLinksClick = (e) => {
    e.stopPropagation();
  };

  return (
    <header id="navbar">
      <nav className="navbar-container container">
        <NavLink href="/" className="home-link">
          WishCart
        </NavLink>
        <button
          type="button"
          id="navbar-toggle"
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
          aria-expanded={isNavbarExpanded}
          onClick={toggleNavbarVisibility}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div
          id="navbar-menu"
          aria-labelledby="navbar-toggle"
          onClick={toggleNavbarVisibility}
        >
          <ul className="navbar-links" onClick={handleNavbarLinksClick}>
            <li className="navbar-item"><NavLink className="navbar-link" href="/">Home</NavLink></li>
            <li className="navbar-item"><NavLink className="navbar-link" href="/products">Products</NavLink></li>
            <li className="navbar-item"><NavLink className="navbar-link" href="/login">LogIn</NavLink></li>
            <li className="navbar-item"><NavLink className="navbar-link" href="/signup">SignUp</NavLink></li>
            <li className="navbar-item"><NavLink className="navbar-link" href="/myorders">Orders</NavLink></li>
            <li className="navbar-item"><NavLink className="navbar-link" href="/Logout">Logout</NavLink></li>
            <li className="navbar-item"><NavLink className="navbar-link" href="/Cart">Cart</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;