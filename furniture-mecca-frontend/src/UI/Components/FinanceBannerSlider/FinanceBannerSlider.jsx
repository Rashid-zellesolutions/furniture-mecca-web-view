import React, { useEffect, useState } from "react";
import './FinanceBannerSlider.css';
import installmentBanner from '../../../Assets/Furniture Mecca/Landing Page/Pay option banner/New Main Financing.jpg';
import paypalBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/AFF-Banner-pt2.jpg';
import moveForword from '../../../Assets/Furniture Mecca/Landing Page/sale banner/AFF-Banner-2.jpg';
import arrowLeft from '../../../Assets/icons/arrow-left.png';
import arrowRight from '../../../Assets/icons/arrow-right.png';

function FinanceBannerSlider() {
    const images = [
        paypalBanner,
        moveForword,
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervel)
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  
  return (
    <div className="carousel-container">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => {
                return <div className="carousel-slide" key={index}>
                    <img src={image} alt={`slide ${index + 1}`} />
                </div>
            })}
        </div>
        {/* <button className="carousel-control prev" onClick={prevSlide}>
            <img src={arrowLeft} alt="arrow left" />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
            <img src={arrowRight} alt="arrow right" />
        </button> */}
    </div>
  );
}

export default FinanceBannerSlider;
