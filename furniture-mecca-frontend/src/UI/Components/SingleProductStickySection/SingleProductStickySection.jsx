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



// Alice Slider
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import imgOne from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 874.png';
import imgTwo from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 875.png';
import imgThree from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 876.png';
import imgFour from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 877.png';
import imgFive from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 878.png';



const SingleProductStickySection = (productData) => {

  // Alice Slider
  const images = [imgOne, imgTwo, imgThree, imgFour, imgFive];
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleThumbnailClickk = (index) => {
        setActiveIndex(index);
        carouselRef.current.slideTo(index); // Slide to the selected thumbnail
    };

    const handleNextSlide = () => {
      const newIndex = activeIndex + 1;
      if (newIndex < images.length) {
          setActiveIndex(newIndex);
          carouselRef.current.slideTo(newIndex); // Slide to the next thumbnail
      }
    };

    const handlePrevSlide = () => {
      const newIndex = activeIndex - 1;
      if (newIndex >= 0) {
          setActiveIndex(newIndex);
          carouselRef.current.slideTo(newIndex); // Slide to the previous thumbnail
      }
    };

    // Calculate the visible thumbnails
    const visibleThumbnails = () => {
        const totalImages = images.length;
        const startIndex = Math.max(0, activeIndex > totalImages - 4 ? totalImages - 4 : activeIndex);
        return images.slice(startIndex, startIndex + 4);
    };

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
      <div className='single-product-alice-slider'>
        <button className='single-product-arrow single-product-arrow-left' onClick={handlePrevSlide} >
          <img src={arrowLeft} alt='left' />
        </button>
        <AliceCarousel
            ref={carouselRef} // Attach the ref
            activeIndex={activeIndex}
            disableDotsControls
            disableButtonsControls
            items={images.map((img, index) => (
                <img key={index} src={img} className="single-product-slider-img" alt={`Slide ${index}`} />
            ))
            }
            responsive={{
                0: { items: 1 },
                1024: { items: 1 }
            }}
        />
        <div className="single-product-slider-thumbnails">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`single-product-slider-thumbnail ${activeIndex === index ? '' : 'single-product-slider-thumbnail-inactive'}`}
                    onClick={() => handleThumbnailClickk(index)}
                >
                    <img src={img} alt={`Thumbnail ${index}`} />
                </div>
            ))}
        </div>
        <button className='single-product-arrow single-product-arrow-right' onClick={handleNextSlide}>
          <img src={arrowRight} alt='right' />
        </button>
    </div>
      </div>
      <div className='right-section'>
        <div className='single-product-detail-container'>
            {/* <h3 className='single-product-heading'>{productData.productCard.productTitle}</h3> */}
            
            <h3 className='single-product-heading'>Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat</h3>
            <div className='single-product-rating'>
                <span className='stars-icon'>
                    {ratingStars.map((item, index) => {
                        return <img key={index} src={item.icon} alt={item.name} className='star-img' />
                    })}
                </span>
                <p>4.1</p>
                <Link>200 Reviews</Link>
            </div>
            {/* <h3 className='single-product-price'>${productData.productCard.priceTag}</h3> */}
            <h3 className='single-product-price'>$199.00</h3>
            {/* <p className='single-product-installment-price-price'>$9/month for 6 months - Total {productData.productCard.priceTag} </p> */}
            
            <span className='single-product-shipping'>
                <p className='single-product-installment-price-price'>$9/month for 6 months - Total $ 199.00 </p>
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
                <AlsoNeed />
                <WhatWeOffer />
                <ProductOverView />
                <SingleProductFAQ />
        </div>
      </div>
    </div>
  );
};

export default SingleProductStickySection;
