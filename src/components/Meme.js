import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  //Getting error in vscode because setAllMediaImages is defined but never used.

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div action="" className="form">
        <input type="text" className="form--input" placeholder="top text" />
        <input type="text" className="form--input" placeholder="bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
        <img src={meme.randomImage} alt="" className="meme--image" />
      </div>
    </main>
  );
}
