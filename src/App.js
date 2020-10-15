import React from "react";

//import components
import Title from "./components/Title";
import CartContainer from "./components/CartContainer";
//import css
import './App.css';
import cartItems from "./cart-items";
//redux imports
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

//initial Store 
const initialStore = {
  cart: cartItems,
  total: 1000,
  amount: 6
};

const store = createStore(reducer, initialStore);

function App() {  

  return (
    <Provider store={store}>
      <Title />
      <CartContainer />
    </Provider>
  );
}

export default App;
