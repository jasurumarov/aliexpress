import React from "react";
import { GrCatalog } from "react-icons/gr";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { ImEnter } from "react-icons/im";
import { BsCalendarHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className="navbar__wrapper">
      <div className="container">
        <div className="navbar__section">
          <div className="navbar__section-logo">
            <h2>AliExpress</h2>
          </div>
          <div className="navbar__section-links">
            <button>
              <GrCatalog />
              <p>Catalog </p>
            </button>
            <div className="search__input">
              <input type="text" placeholder="xiomi mi 11 ultra" />
              <button>Search...</button>
            </div>
            <button onClick={() => navigate("/wishlist")} >
                <BsCalendarHeartFill />
                <p>Wishlist</p>
            </button>
            <button onClick={() => navigate("/carts")}>
              <HiMiniShoppingCart />
              <p>Cart</p>
            </button>
            <button>
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