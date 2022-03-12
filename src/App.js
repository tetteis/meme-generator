import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
// import Practice from "./components/Practice";
import "./style.css";

export default function App() {
  return (
    <div>
      <header>
        <Header />
        <Meme />
        {/* <Practice /> */}
      </header>
    </div>
  );
}
