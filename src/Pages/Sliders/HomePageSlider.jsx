import React from "react";
import "./slider.css";
import SliderDesc from "./SliderDesc";
let url = "sliders/slider1.jpg";
const HomePageSlider = () => {
  return (
    <section id="sliderBlock">
      <article>
        <div
          className="imageBlock"
          style={{
            backgroundImage: `linear-gradient(to right, #000 40%, transparent 58%), url(${url})`,
          }}
        ></div>
        <div className="sliderDescBlock">
          <SliderDesc />
        </div>
      </article>
    </section>
  );
};

export default HomePageSlider;
