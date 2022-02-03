import React from "react";
import { HorizontalCard } from "../../components";
import "./cart.css";

function Cart() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 400px)", margin: "0", padding: "0" }}
    >
      <div className="cart-horizontal-cards-container">
        <HorizontalCard
          cart
          categoryTitle={"Cart rings"}
          categoryType={"women"}
          imageLink={"https://picsum.photos/400/300"}
        />
        <HorizontalCard
          cart
          categoryTitle={"Cart rings"}
          categoryType={"women"}
          imageLink={"https://picsum.photos/900/400"}
        />
      </div>
    </div>
  );
}

export default Cart;
