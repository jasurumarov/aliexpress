import React from "react";
import { TiFlash } from "react-icons/ti";
import { ImLocation } from "react-icons/im";

const Category = () => {
  return (
    <div className="category__wrapper">
      <div className="container">
        <div className="category__section">
          <div className="category__section-price">
            <button>
              <p>Flash Deals</p>
              <TiFlash />
            </button>
            <button>One Price</button>
          </div>
          <div className="category__section-adress">
            <button>
              <ImLocation />
              <p>Chilanzor Tumani</p>
            </button>
            <button>EN</button>
            <button>UZS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;