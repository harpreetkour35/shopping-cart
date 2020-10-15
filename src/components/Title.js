import React from "react";
import { connect } from "react-redux";

function Title({ amount }) {
  return (
    <div>
      <h3 className="title">Shopping Bag <span>items: ({amount})</span></h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};

export default connect(mapStateToProps)(Title);
