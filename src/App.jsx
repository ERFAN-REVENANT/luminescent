import React from "react";
import Header from "./components/Header";
import "../public/tailwind.css";
import Hero from "./components/Hero";
import InfiniteScroll from "./components/InfiniteScroll";
import ArtWork from "./components/ArtWork";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <InfiniteScroll></InfiniteScroll>
      <ArtWork></ArtWork>
    </div>
  );
};

export default App;
