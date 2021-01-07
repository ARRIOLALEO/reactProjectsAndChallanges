import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubMenu}>

      <div className="hero-center">
        <article className="hero-info">
          <h1> some infomrmation goes here</h1>
          <p>
            some infomrmation goes heresome infomrmation goes heresome
            infomrmation goes heresome infomrmation goes heresome infomrmation
            goes heresome infomrmation goes heresome
          </p>
          <button className="btn"> Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
