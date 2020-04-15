import React from "react";
import bakers from "./bakers.png";

function HomeContent() {
  return (
    <div>
      <div>
        <h3>Meet the Bakers</h3>
        <p>Blah blah blah</p>
      </div>
      <img src={bakers} alt="The Bakers" />
    </div>
  );
}

export default HomeContent;
