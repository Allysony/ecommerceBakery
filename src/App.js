import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomeCarousel from "./components/HomeCarousel";
import HomeContent from "./components/HomeContent";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeCarousel />
      <HomeContent />
    </div>
  );
}

export default App;
