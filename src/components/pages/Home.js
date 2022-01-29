import "./home.css";
import React from "react";
import VerticalCard from "../VerticalCard";
import HorizontalCard from "../HorizontalCard";
function Home() {
  return (
    <>
      <img
        className="image-banner"
        src={"https://picsum.photos/900/300"}
        alt="random"
      />
      <div className="home-horizontal-cards-container">
        <HorizontalCard
          categoryTitle={"Ear rings"}
          categoryType={"women"}
          categoryDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et ad labore soluta pariatur! Voluptatum quibusdam alias harum assumenda!"
          }
          imageLink={"https://picsum.photos/900/500"}
        />
        <HorizontalCard
          categoryTitle={"Ear rings"}
          categoryType={"women"}
          categoryDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et ad labore soluta pariatur! Voluptatum quibusdam alias harum assumenda!"
          }
          imageLink={"https://picsum.photos/900/500"}
        />
        <HorizontalCard
          categoryTitle={"Ear rings"}
          categoryType={"women"}
          categoryDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et ad labore soluta pariatur! Voluptatum quibusdam alias harum assumenda!"
          }
          imageLink={"https://picsum.photos/900/500"}
        />
        <HorizontalCard
          categoryTitle={"Ear rings"}
          categoryType={"women"}
          categoryDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et ad labore soluta pariatur! Voluptatum quibusdam alias harum assumenda!"
          }
          imageLink={"https://picsum.photos/900/500"}
        />
        <HorizontalCard
          categoryTitle={"Ear rings"}
          categoryType={"women"}
          categoryDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et ad labore soluta pariatur! Voluptatum quibusdam alias harum assumenda!"
          }
          imageLink={"https://picsum.photos/900/500"}
        />
      </div>
    </>
  );
}

export default Home;
