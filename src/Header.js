import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { IconButton } from "@material-ui/core";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }] = useStateValue();
  const login = () => {
    if (auth) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://clipground.com/images/white-amazon-logo-png-1.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" style={{ fontSize: 30 }} />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello, {user ? `${user?.email}` : "Sign in"}
            </span>
            <span className="header__optionLineTwo">Account</span>
          </div>
        </Link>
        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <AddShoppingCartIcon
              className="header__cart"
              style={{ fontSize: 36 }}
            />

            <span className="header__cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
