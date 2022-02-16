import "./App.css";
import React from "react";
import NewImg from "./New-Image.png";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bgw.jpg",
  });
  const [allMeme, setallMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setallMeme(data.data.memes));
  }, []);

  function getImage() {
    const randomNo = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNo].url;
    console.log(url);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="form">
        <div className="inputs">
          <input
            onChange={handleChange}
            value={meme.topText}
            name="topText"
            className="form-ipt"
            type="text"
            placeholder="Top Input"
          ></input>
          <input
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
            className="form-ipt"
            type="text"
            placeholder="Bottom Input"
          ></input>
        </div>
        <button onClick={getImage}>
          <img src={NewImg} width="200px"></img>
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-img"></img>
        <h2 className="meme-input top">{meme.topText}</h2>
        <h2 className="meme-input bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
