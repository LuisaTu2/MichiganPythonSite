import React, { useEffect, useState } from "react";
import "./PhotoCarousel.css";

interface PhotoCarouselProps {
  images: string[];
  width?: string;
  height?: string;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clean up on unmount
    return () => clearInterval(interval);
  }, [currentIndex, 5000]);

  return (
    <div className="carousel-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
          style={{ left: `${(index - currentIndex) * 100}%` }}
        />
      ))}

      <button className="carousel-button prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        ›
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
