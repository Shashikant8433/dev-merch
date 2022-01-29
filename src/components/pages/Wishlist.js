import "./wishlist.css";
import React from "react";
import VerticalCard from "../VerticalCard";
function Wishlist() {
  return (
    <div className="wishlist-cards-container">
      <VerticalCard
        wishlist
        imageLink={"https://picsum.photos/800/600"}
        productName={"Diamond ring"}
        priceDetails={{ amount: 1200, discountInPercent: 16.7 }}
        fastDelivery={false}
      />
      <VerticalCard
        wishlist
        imageLink={"https://picsum.photos/800/600"}
        productName={"Diamond ring"}
        priceDetails={{ amount: 1200, discountInPercent: 16.7 }}
        fastDelivery={false}
      />
      <VerticalCard
        wishlist
        imageLink={"https://picsum.photos/800/600"}
        productName={"Diamond ring"}
        priceDetails={{ amount: 1200, discountInPercent: 16.7 }}
        fastDelivery={false}
      />
      <VerticalCard
        wishlist
        imageLink={"https://picsum.photos/800/600"}
        productName={"Diamond ring"}
        priceDetails={{ amount: 1200, discountInPercent: 16.7 }}
        fastDelivery={false}
      />
    </div>
  );
}

export default Wishlist;
