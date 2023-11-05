import React, { useRef } from 'react';

export default function Mobile() {
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
      <span className="Header-text"><strong>Mobile: </strong><span> My favourite from My phone</span> </span>
    <div className="container">
      <div className="slider-wraper">
        <div className="img-list" ref={imagelistRef}>
          <img src={require('../images/image 0.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 1.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 2.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 3.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 4.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 5.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 6.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 7.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 8.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 9.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 10.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 11.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 12.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 13.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 14.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 15.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 16.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 17.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 18.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 19.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 20.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 21.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 22.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 23.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 24.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 25.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 26.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 27.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 28.jpg')} alt="" className="img-item" />
          <img src={require('../images/image 29.jpg')} alt="" className="img-item" />
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
