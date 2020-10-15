import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { green } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { connect } from "react-redux";
import { INCREASE, DECREASE, DELETE } from "../actions";

function CartItem({ img, title, price, amount, remove }) {
  return (
    <div className="item">
      <div className="buttons">
        <button className="delete-button" onClick={() => remove()}>
          <DeleteIcon style={{ color: green[500] }} />
        </button>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="product-Title">{title}</div>
      <div className="quantity">
        <button className="plus-btn" type="button" name="button">
          <AddIcon />
        </button>
        <span>{amount}</span>
        <button className="minus-btn" type="button" name="button">
          <RemoveIcon />
        </button>
      </div>
      <div className="total-price">${price}</div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps ) => {
  const id = ownProps.id
  return {
    remove: () => dispatch({ type: DELETE, payload: {id: id}}),
    increase: () => dispatch({ type: INCREASE, payload: {id: id}}),
    decrease: () => dispatch({ type: DECREASE, payload: {id: id}})  

  };
};

export default connect(null, mapDispatchToProps)(CartItem);
