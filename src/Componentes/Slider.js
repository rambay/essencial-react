import { useEffect, useRef } from "react";

function Slider() {
  let sliderSectionLast = useRef();

  useEffect(() => {
    const slider = document.querySelector(".slider");
    slider.insertAdjacentElement("afterbegin", sliderSectionLast.current);

    setInterval(() => {
      Next();
    }, 5000);
  }, []);

  const Next = () => {
    const slider = document.querySelector(".slider");
    const sectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  };

  const Prev = () => {
    const slider = document.querySelector(".slider");
    const sectionLast = document.querySelectorAll(".slider__section")[2];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  };

  return (
    <div className="sliderHeader">
      <div className="container-slider">
        <div className="slider" id="slider">
          <div className="slider__section">
            <img
              src="./assets/slider-1.jpg"
              alt="Slider"
              className="slider__img"
            />
          </div>
          <div className="slider__section">
            <img
              src="./assets/slider-2.jpg"
              alt="Slider"
              className="slider__img"
            />
          </div>
          <div className="slider__section" ref={sliderSectionLast}>
            <img
              src="./assets/slider-3.jpg"
              alt="Slider"
              className="slider__img"
            />
          </div>
        </div>
      </div>
      <div className="slider__btn slider__btn--right" onClick={Next}>
        <img src="./assets/right-arrow.png" alt="Right" />
      </div>
      <div className="slider__btn slider__btn--left" onClick={Prev}>
        <img src="./assets/left-arrow.png" alt="Left" />
      </div>
    </div>
  );
}

export default Slider;
