import React, { useState } from "react";

const Tour = (tourInfo) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <article className="single-tour" id={tourInfo.tourInfo.id}>
      <img src={tourInfo.tourInfo.image} />
      <footer>
        <div className="tour-info">
          <h4 className="title">{tourInfo.tourInfo.name}</h4>
          <h4 className="tour-price ">{tourInfo.tourInfo.price}</h4>
        </div>
        <p>
          {readmore
            ? tourInfo.tourInfo.info
            : `${tourInfo.tourInfo.info.substring(0, 150)}`}{" "}
          <button
            onClick={() => {
              setReadmore((prevState) => !prevState);
            }}
          >
            Read more
          </button>{" "}
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            document.getElementById(tourInfo.tourInfo.id).innerHTML = "";
          }}
        >
          Delete
        </button>
      </footer>
    </article>
  );
};

export default Tour;
