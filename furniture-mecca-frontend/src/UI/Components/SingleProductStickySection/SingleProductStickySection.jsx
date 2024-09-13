import React, { useRef, useState, useEffect } from 'react';
import './SingleProductStickySection.css';
import { Link, useParams } from 'react-router-dom';
// Sticky Slider Images
import moonDanceImg from '../../../Assets/images/Moondance-Bedroom-Set-01-1024x644 2.png';
import arrowLeft from '../../../Assets/icons/arrow-left-red.png';
import arrowRight from '../../../Assets/icons/arrow-right-red.png';
import redHeart from '../../../Assets/icons/red-heart.png'

// Rating Stars Import
import blackStar from '../../../Assets/icons/star-black.png';
import whiteStar from '../../../Assets/icons/star-transperent-bg.png';
import minus from '../../../Assets/icons/minus.png';
import plus from '../../../Assets/icons/plus.png';

// Variant Images
import silverImage from '../../../Assets/images/silver-variant-image.png';
import brownImage from '../../../Assets/images/brown-variant-image.png';
import blackImage from '../../../Assets/images/black-variant-image.png';
import grayImage from '../../../Assets/images/gray-variant-image.png'
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';
import ProductOverView from '../ProductOverView/ProductOverView';
import SingleProductFAQ from '../SingleProductFAQ/SingleProductFAQ';
import AlsoNeed from '../AlsoNeed/AlsoNeed';



const SingleProductStickySection = (productData) => {

  // sticky behavior scrip
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftSectionRef.current && rightSectionRef.current) {
        const leftSection = leftSectionRef.current;
        const rightSection = rightSectionRef.current;

        const rightSectionBottom = rightSection.getBoundingClientRect().bottom;
        const leftSectionBottom = leftSection.getBoundingClientRect().bottom;

        if (rightSectionBottom < window.innerHeight) {
          leftSection.style.position = 'absolute';
          leftSection.style.bottom = '0';
        } else {
          leftSection.style.position = 'sticky';
          leftSection.style.bottom = 'auto';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resizing of the window

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Sticky Behavior cript end


  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);
  const [disableMainLeft, setDisableMainLeft] = useState(true);
  const [disableMainRight, setDisableMainRight] = useState(false);
  const [disableThumbLeft, setDisableThumbLeft] = useState(true);
  const [disableThumbRight, setDisableThumbRight] = useState(false);

  const sliderImages = [
    { name: 'image one', img: moonDanceImg },
    { name: 'image two', img: moonDanceImg },
    { name: 'image three', img: moonDanceImg },
    { name: 'image four', img: moonDanceImg },
    { name: 'image five', img: moonDanceImg },
    { name: 'image six', img: moonDanceImg },
    { name: 'image seven', img: moonDanceImg },
    { name: 'image eight', img: moonDanceImg },
  ];

  const updateDisableStates = () => {
    if (mainSliderRef.current) {
      const isAtMainStart = mainSliderRef.current.scrollLeft === 0;
      const isAtMainEnd = mainSliderRef.current.scrollWidth - mainSliderRef.current.scrollLeft === mainSliderRef.current.clientWidth;
      setDisableMainLeft(isAtMainStart);
      setDisableMainRight(isAtMainEnd);
    }
    
    if (thumbnailSliderRef.current) {
      const isAtThumbStart = thumbnailSliderRef.current.scrollLeft === 0;
      const isAtThumbEnd = thumbnailSliderRef.current.scrollWidth - thumbnailSliderRef.current.scrollLeft === thumbnailSliderRef.current.clientWidth;
      setDisableThumbLeft(isAtThumbStart);
      setDisableThumbRight(isAtThumbEnd);
    }
  };

  useEffect(() => {
    // Ensure refs are not null before adding event listeners
    const mainSlider = mainSliderRef.current;
    const thumbnailSlider = thumbnailSliderRef.current;

    if (mainSlider) {
        mainSlider.addEventListener('scroll', updateDisableStates);
    }

    if (thumbnailSlider) {
        thumbnailSlider.addEventListener('scroll', updateDisableStates);
    }

    return () => {
        // Ensure refs are not null before removing event listeners
        if (mainSlider) {
            mainSlider.removeEventListener('scroll', updateDisableStates);
        }

        if (thumbnailSlider) {
            thumbnailSlider.removeEventListener('scroll', updateDisableStates);
        }
    };
}, []);


useEffect(() => {
    if (thumbnailSliderRef.current) {
      const thumbnailWidth = thumbnailSliderRef.current.clientWidth / 3;
      thumbnailSliderRef.current.scrollTo({
        left: currentIndex * thumbnailWidth - (thumbnailWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      mainSliderRef.current.scrollBy({ left: -mainSliderRef.current.clientWidth, behavior: 'smooth' });
      thumbnailSliderRef.current.scrollBy({ left: -thumbnailSliderRef.current.clientWidth / 3, behavior: 'smooth' });
      setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };

  const scrollRight = () => {
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      mainSliderRef.current.scrollBy({ left: mainSliderRef.current.clientWidth, behavior: 'smooth' });
      thumbnailSliderRef.current.scrollBy({ left: thumbnailSliderRef.current.clientWidth / 3, behavior: 'smooth' });
      setCurrentIndex(prevIndex => Math.min(prevIndex + 1, sliderImages.length - 1));
    }
  };


const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setThumbnailIndex(index);
    mainSliderRef.current.scrollTo({ left: mainSliderRef.current.clientWidth * index, behavior: 'smooth' });
  };

//   Second Section Functions

  const ratingStars = [
    {name: 'filled Star', icon: blackStar },
    {name: 'filled Star', icon: blackStar },
    {name: 'filled Star', icon: blackStar },
    {name: 'filled Star', icon: blackStar },
    {name: 'un-filled Star', icon: whiteStar },
  ]

  const variantImages = [
    {name: 'Silver', img: silverImage},
    {name: 'Brown', img: brownImage},
    {name: 'Black', img: blackImage},
    {name: 'Gray', img: grayImage},
  ]

  const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        setCount(prevCount => Math.max(1, prevCount - 1));
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

  return (
    <div className='sticky-main-container'>
      <div className='left-section'>
        <div className='main-sticky-slider'>
          <div className={`stickyslider-arrow sticky-arrow-left ${disableMainLeft ? 'disabled' : ''}`} onClick={() => scrollLeft('main')}>
            <img src={arrowLeft} alt='arrow left' />
          </div>
          <div className='sticky-section-slider' ref={mainSliderRef}>
            {sliderImages.map((item, index) => (
              <div className='sticky-slide' key={index}>
                <img src={productData.productCard.mainImage} alt={item.name} />
              </div>
            ))}
          </div>
          <div className={`stickyslider-arrow sticky-arrow-right ${disableMainRight ? 'disabled' : ''}`} onClick={() => scrollRight('main')}>
            <img src={arrowRight} alt='arrow right' />
          </div>
        </div>
        <div className='thumbnail-slider-container'>
          <div className='thumbnail-slider' ref={thumbnailSliderRef}>
            {sliderImages.map((thumbnailItem, thumbnailIndex) => (
              <div
                key={thumbnailIndex}
                className={`thumb-slide ${currentIndex === thumbnailIndex ? 'selected' : ''}`}
                onClick={() => handleThumbnailClick(thumbnailIndex)}
              >
                <img src={productData.productCard.mainImage} alt={thumbnailItem.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='right-section'>
        <div className='single-product-detail-container'>
            <h3 className='single-product-heading'>{productData.productCard.productTitle}</h3>
            <div className='single-product-rating'>
                <span className='stars-icon'>
                    {ratingStars.map((item, index) => {
                        return <img key={index} src={item.icon} alt={item.name} className='star-img' />
                    })}
                </span>
                <p>4.1</p>
                <Link>200 Reviews</Link>
            </div>
            <h3 className='single-product-price'>{productData.productCard.priceTag}</h3>
            <p className='single-product-installment-price-price'>$9/month for 6 months - Total {productData.productCard.priceTag}</p>
            <span className='single-product-shipping'>
                {/* <p>Free Shipping</p> */}
                <p>Get it between July 27 - July 31'</p>
            </span>
            <div className='single-product-frame-color'>
                <span className='color-frame-heading'>
                    <p>Select Frame Color: </p><Link>Black</Link>
                </span>
                <div className='variant-images-div'>
                    {variantImages.map((item, index) => {
                        return <div key={index} className='variant'>
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    })}
                </div>
            </div>
                <div className='add-cart-or-add-items-div'>
                    <div className='item-count'>
                        <button className={`minus-btn ${count === 1 ? 'disabled' : ''}`} onClick={handleDecrease} disabled={count === 1}>
                            <img src={minus} alt='minus btn' />
                        </button>
                        <input type='number' value={count} readOnly/>
                        <button className='plus-btn' onClick={handleIncrease}>
                            <img src={plus} alt='plus btn' />
                        </button>
                    </div>
                    <img src={redHeart} alt='red-heart-icon' className='red-heart-icon' />
                    <button  className={`add-to-cart-btn ${isLoading ? 'loading' : ''}`} onClick={handleClick}>
                      {isLoading ? 'Loading...' : 'Add To Cart'}
                  </button>
                </div>
                {/* <AlsoNeed /> */}
                <WhatWeOffer />
                <ProductOverView />
                <SingleProductFAQ />
        </div>
      </div>
    </div>
  );
};

export default SingleProductStickySection;
