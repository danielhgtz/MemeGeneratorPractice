import React, { useEffect, useState } from "react";
import "./ImageGenerator.css";

function ImagenRandom() {
  const [imagenRandom, setImagenRandom] = useState();

  const fetchData = async () => {
    const result = await fetch("https://meme-api.com/gimme").then((res) =>
      res.json()
    );
    const resultUrl = result.url;

    setImagenRandom(resultUrl);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img className="imageFormat" src={imagenRandom} />
      <button className="imageButton" onClick={fetchData}>
        Generate new meme
      </button>
    </div>
  );
}

export default ImagenRandom;
