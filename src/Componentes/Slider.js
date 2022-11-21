import { useEffect, useRef } from "react";

function Slider() {
  const slider = useRef();
  let sliderSectionLast = useRef();

  useEffect(() => {
    slider.current.insertAdjacentElement(
      "afterbegin",
      sliderSectionLast.current
    );

    setInterval(() => {
      Next();
    }, 5000);
  }, []);

  const Next = () => {
    const sectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.current.style.marginLeft = "-200%";
    slider.current.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.current.style.transition = "none";
      slider.current.insertAdjacentElement("beforeend", sectionFirst);
      slider.current.style.marginLeft = "-100%";
    }, 500);
  };

  const Prev = () => {
    const sectionLast = document.querySelectorAll(".slider__section")[2];
    slider.current.style.marginLeft = "0";
    slider.current.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.current.style.transition = "none";
      slider.current.insertAdjacentElement("afterbegin", sectionLast);
      slider.current.style.marginLeft = "-100%";
    }, 500);
  };

  return (
    <div className="sliderHeader">
      <div className="container-slider">
        <div className="slider" id="slider" ref={slider}>
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
        &#62;
      </div>
      <div className="slider__btn slider__btn--left" onClick={Prev}>
        &#60;
      </div>
    </div>
  );
}

export default Slider;
