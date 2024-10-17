import React from "react";
import Header from "./components/Header";
import "../public/tailwind.css";
import Hero from "./components/Hero";
import InfiniteScroll from "./components/InfiniteScroll";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <InfiniteScroll></InfiniteScroll>
    </div>
  );
};

export default App;
