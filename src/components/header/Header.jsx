import React from "react";
import { GrCatalog } from "react-icons/gr";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { ImEnter } from "react-icons/im";
import { BsCalendarHeartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaChartPie } from "react-icons/fa6";

const Header = () => {
  let wishlist = useSelector(state => state.wishlist)
  let cart = useSelector(state => state.cart)
  const navigate = useNavigate()
  return (
    <div className="navbar__wrapper">
      <div className="container">
        <div className="navbar__section">
          <div className="navbar__section-logo">
            <h2><Link to={"/"}>AliExpress</Link></h2>
          </div>
          <div className="navbar__section-links">
            <button className="catalog-btn" onClick={() => navigate("/statistics")}>
              <FaChartPie />
              <p>Statistics</p>
            </button>
            <div className="search__input">
              <input type="text" placeholder="xiomi mi 11 ultra" />
              <button className="search-btn">Find</button>
            </div>
            <button className="catalog-btn" onClick={() => navigate("/wishlist")} >
              <BsCalendarHeartFill />
              <p>Wishlist</p>
              <span>{wishlist.length}</span>
            </button>
            <button className="catalog-btn" onClick={() => navigate("/carts")}>
              <HiMiniShoppingCart />
              <p>Cart</p>
              <span>{cart.length}</span>
            </button>
            <button className="catalog-btn">
              <ImEnter />
              <p>Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;