import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../DataLayer";
import firebase from 'firebase/app'

const Header = () => {
  const [{basket, user} , dispatch] = useDataLayerValue();

  const handleAuthentication = () => {
    if (user) {
      firebase.auth().signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="search__icon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello, { user ? user.email : 'Guest'}</span>
          <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
        </div>
        </Link>
        <Link to={user ? "/orders" : "/login"}>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
