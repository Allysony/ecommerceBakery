import React from "react";

import Header from "./Header";
import HomeCarousel from "./HomeCarousel";
import HomeContent from "./HomeContent";

function Home() {
  return (
    <div className="Home">
      <Header />
      <HomeCarousel />
      <HomeContent />
    </div>
  );
}

export default Home;
