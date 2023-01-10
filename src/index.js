import React from "react";
import ReactDOM from "react-dom";

const randomImg = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        alt="gulabjamun"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7LrsvWLNK2A579zfNGMrGvZVEnFRMlE04w&usqp=CAU"
      />
      <img
        className="food-img"
        alt="pinni"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAfYPun6bg-oBFFxoncDDUOaF1dLno5fPSBm4dMNgwkqYAMynN0a-h3UxxXueKAf7XEY&usqp=CAU"
      />
      <img
        className="food-img"
        alt="rasmalia"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qK87xQW5gDcT5U7pE-MicemDdrjqid0Chw&usqp=CAU"
      />
    </div>
    <div className="randImgBlock">
      <img alt="random" src={randomImg + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
