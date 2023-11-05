import React, { useRef } from 'react';

export default function Dextop() {

  const imagelistRef = useRef(null);
                   
  const handleSlideButton = () => {
    if (imagelistRef.current) {
      const imagelist = imagelistRef.current;
      const maxScrollLeft = imagelist.scrollWidth - imagelist.clientWidth;
      const prevButton = document.getElementById("prevslide");
      const nextButton = document.getElementById("nextslide");
      const sliderButton = document.querySelector(".container .srolbar");
      const sliderButtonthumb = sliderButton.querySelector(".scrollbar-thumb");

      if (prevButton && nextButton) {
        prevButton.style.display = imagelist.scrollLeft <= 0 ? "none" : "block";
        nextButton.style.display = imagelist.scrollLeft >= maxScrollLeft ? "none" : "block";
      }
      
      const scrollposition = imagelist.scrollLeft;
      const thumbposition = (scrollposition/maxScrollLeft)*(sliderButton.clientWidth - sliderButtonthumb.offsetWidth)
      sliderButtonthumb.style.left = `${thumbposition}px`

      sliderButtonthumb.scrollTo({
        left: scrollposition.scrollLeft + thumbposition,
        behavior: "smooth", // This makes the scrolling smooth
      });
    }
  };

 

  const prevslide = (event) => {
    const imagelist = document.querySelector(".slider-wrapper .img-list");
    const direction = event.target.id === "prevslide" ? -1 : 1;

    if (imagelistRef.current) {
      const imagelist = imagelistRef.current;
      const scrollAmount = imagelist.clientWidth * direction;
      imagelist.scrollLeft += scrollAmount;
      const maxScrollleft = imagelist.scrollWidth - imagelist.clientWidth;
      imagelist.scrollTo({
        left: imagelist.scrollLeft + scrollAmount,
        behavior: "smooth", // This makes the scrolling smooth
      });

        handleSlideButton();

    }
  };

  return (
    <div className="homecontainer">
        <span className="Header-text"><strong>Dextop: </strong><span> My favourite from My phone</span> </span>
      <div className="container">
      <div className="slider-wraper" >
        <div className="img-list" ref={imagelistRef}>
          <img src={require('../dextop_images/image 0.jpg')} alt="" className="img-item" />
          <img src={require('../dextop_images/image 1.jpg')} alt="" className="img-item" />
          <img src={require('../dextop_images/image 2.jpg')} alt="" className="img-item" />
          <img src={require('../dextop_images/image 3.jpg')} alt="" className="img-item" />
          <img src={require('../dextop_images/image 4.jpg')} alt="" className="img-item" />
          <img src={require('../dextop_images/image 5.jpg')} alt="" className="img-item" />
          <img src={require('../dextop_images/image 6.jpg')} alt="" className="img-item" />
          
        </div>
      </div>
      <button id="prevslide" onClick={prevslide}className="material-symbols-outlined side-button">chevron_left</button>
      <button id="nextslide" onClick={prevslide}className="material-symbols-outlined side-button">chevron_right</button>

      <div className="srolbar">
        <div className="scrollbar-tracker">
          <div className="scrollbar-thumb">

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
