import "./App.css";
import React from "react";
import Face from "./Troll Face.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Face}></img>
      <h1>Meme Generator</h1>
    </div>
  );
}
