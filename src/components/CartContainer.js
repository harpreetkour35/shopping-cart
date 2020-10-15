import React from "react";
import CartItem from "./CartItem";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { CLEAR_CART } from "../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
  if(cart.length === 0) {
    return (
      <div className="shopping-cart">
        <header className="empty-cart">
          <h2>Your Bag</h2>
          <h4>is currently empty</h4> 
        </header>
      </div>
    )
  }
  return (
    <div className="shopping-cart">
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total}</span>
          </h4>
        </div>
        <div className="btn clear-btn">
          <Button variant="outlined" color="primary" onClick={() => dispatch({type: CLEAR_CART})}>
            Clear Cart
          </Button>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total,
  };
};

export default connect(mapStateToProps)(CartContainer);
