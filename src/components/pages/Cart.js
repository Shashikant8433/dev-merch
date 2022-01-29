import React from "react";
import HorizontalCard from "../HorizontalCard";
function Cart() {
  return (
    <div style={{ minHeight: "calc(100vh - 400px)" }}>
      <div className="cart-horizontal-cards-container">
        <HorizontalCard
          cart
          categoryTitle={"Cart rings"}
          categoryType={"women"}
          imageLink={"https://picsum.photos/900/400"}
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
