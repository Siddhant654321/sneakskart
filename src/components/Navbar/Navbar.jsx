import { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { getSuggestionsAPI } from "../../services/productServices";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  const navigate = useNavigate();

  const user = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbarVisibility = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const handleNavbarLinksClick = (e) => {
    e.stopPropagation();
    toggleNavbarVisibility();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < suggestions.length) {
      if (e.key === "ArrowDown") {
        setSelectedItem((current) =>
          current === suggestions.length - 1 ? 0 : current + 1,
        );
      } else if (e.key === "ArrowUp") {
        setSelectedItem((current) =>
          current === 0 ? suggestions.length - 1 : current - 1,
        );
      } else if (e.key === "Enter" && selectedItem > -1) {
        const suggestion = suggestions[selectedItem];
        navigate(`/products?search=${suggestion.title}`);
        setSearch("");
        setSuggestions([]);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  useEffect(() => {
    const delaySuggestions = setTimeout(() => {
      if (search.trim() !== "") {
        getSuggestionsAPI(search)
          .then((res) => setSuggestions(res.data))
          .catch((err) => console.log(err));
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delaySuggestions);
  }, [search]);

  return (
    <header id="navbar">
      <nav className="navbar-container container">
        <NavLink to="/" className="home-link">
          SneaksKart
        </NavLink>
        <form className="align_center navbar_form" onSubmit={handleSubmit}>
          <div className="search_div">
            <input
              type="text"
              className="navbar_search"
              placeholder="Search Products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" className="search_button">
              Search
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="search_result">
              {suggestions.map((suggestion, index) => (
                <li
                  className={
                    selectedItem === index
                      ? "search_suggestion_link active"
                      : "search_suggestion_link"
                  }
                  key={suggestion._id}
                >
                  <Link
                    to={`/products?search=${suggestion.title}`}
                    onClick={() => {
                      setSearch("");
                      setSuggestions([]);
                    }}
                  >
                    {suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </form>
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
            <li className="navbar-item">
              <NavLink
                className="navbar-link"
                to="/"
                onClick={toggleNavbarVisibility}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/products">
                Products
              </NavLink>
            </li>
            {!user && (
              <>
                <li className="navbar-item">
                  <NavLink className="navbar-link" to="/login">
                    LogIn
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink className="navbar-link" to="/signup">
                    SignUp
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li className="navbar-item">
                  <NavLink className="navbar-link" to="/myorders">
                    My Orders
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink className="navbar-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/cart" className="navbar-link">
                    Cart{" "}
                    <p className="align_center cart_counts">{cart.length}</p>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
