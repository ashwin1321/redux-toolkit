import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Navbar</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <span className="nav-cart-amount">{amount}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
