import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data.json";

function App() {
  const [planet, setPlanet] = useState(0);
  let root = document.documentElement;
  const changePlanet = (planet) => {
    setPlanet(planet);
    root.style.setProperty("--current-color", data[planet].color);
    document.title = `The Planets | ${data[planet].name}`;
  };

  return (
    <div className="App">
      <Header changePlanet={changePlanet} planet={planet} />
      <Main planet={planet} />
    </div>
  );
}

export default App;
