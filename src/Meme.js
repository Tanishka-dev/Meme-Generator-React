import "./App.css";
import React from "react";
import NewImg from "./New-Image.png";
import MemeData from "./memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getImage() {
    const memesArray = MemeData.data.memes;
    const randomNo = Math.floor(Math.random() * memesArray.length);
    console.log(randomNo);
    setMemeImage(memesArray[randomNo].url);
  }
  return (
    <div>
      <div className="form">
        <div className="inputs">
          <input
            className="form-ipt"
            type="text"
            placeholder="Top Input"
          ></input>
          <input
            className="form-ipt"
            type="text"
            placeholder="Bottom Input"
          ></input>
        </div>
        <button onClick={getImage}>
          <img src={NewImg} width="200px"></img>
        </button>
      </div>
      <img src={memeImage} className="meme-img"></img>
    </div>
  );
}
