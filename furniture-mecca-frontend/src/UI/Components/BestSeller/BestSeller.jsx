import React, { useState, useRef, useEffect } from 'react';
import './BestSeller.css';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import bannerOne from '../../../Assets/images/best-seller-banner-one.png';
import bannerTwo from '../../../Assets/images/best-seller-banner-two.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';


import heartIcon from '../../../Assets/icons/like.png'
import arrowLeft from '../../../Assets/icons/arrow-left.png'
import arrowRight from '../../../Assets/icons/arrow-right.png'

const BestSeller = () => {
    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    const [activeItem, setActiveItem] = useState(0)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    };

    const productCardData = useSelector((state) => state.productCard.data)

    const navigate = useNavigate()
    
    const handleProductClick = (item) => {
        navigate(`/single-product/${item.id}`, { state: { productCard: item } });
        console.log("Clicked on ", item.id);
    }

    // cards script


    const [loading, setLoading] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerRow = 3;
    const rows = 2;
    const itemsPerPage = itemsPerRow * rows;
    const totalItems = productCardData.length;
    const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            const containerWidth = sliderRef.current.scrollWidth;
            sliderRef.current.style.width = `${containerWidth}px`;
        }
    }, [productCardData]);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    };

    const offset = -currentIndex * 100; // Adjust offset for sliding

  return (
    <div className='best-seller-main-container'>
        <div className='best-seller-cards-container'>
            <div className='best-seller-menu'>
                <h3>Best Sellers</h3>
                <div className='best-seller-nav-items'>
                {bestSellerNav.map((item, index) => (
                <p
                    key={index}
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => handleActiveItem(index)}
                >
                    {item}
                </p>
            ))}
                </div>
            </div>
            {/* <div className='best-seller-cards'>
                {productCardData.map((item, index) => {
                    return <BestSellerProductCard key={index} heartIcon={item.heartIcon} 
                        productMainImage={item.mainImage} 
                        starIcon={item.ratingStars} 
                        reviews={item.reviews} 
                        productName={item.productTitle}
                        oldPrice={item.defaultPrice}
                        newPrice={item.priceTag}
                        handleCardClicked={() => handleProductClick(item)}
                    />
                })}
            </div> */}
            <div className='products-slider-container'>
                {loading && <Loader />} {/* Show loader when loading */}
                <button className='product-slider-arrow left' onClick={handlePrevClick}>
                    <img src={arrowLeft} alt="left" />
                </button>
                <div className='best-seller-slider' style={{ transform: `translateX(${offset}%)` }} >
                    {productCardData.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((item, index) => (
                        <div key={index} className='best-seller-product-card-div' onClick={() => handleProductClick(item)}>
                            <img src={item.mainImage} alt='img' className='best-seller-product-main-image' />
                            <span className='product-rating-span'>
                                {item.ratingStars.map((star, starIndex) => (
                                    <img key={starIndex} src={star.starIcon} alt='star' />
                                ))}
                                <p>{item.reviews}</p>
                            </span>
                            <p className='productmain-name'>{item.productTitle}</p>
                            <div className='price-and-heart'>
                                <span>
                                    <del>{item.defaultPrice}</del>
                                    <p>{item.priceTag}</p>
                                </span>
                                <img src={heartIcon} alt='heart' />
                            </div>
                        </div>
                    ))}
                </div>
                <button className='product-slider-arrow right' onClick={handleNextClick}>
                    <img src={arrowRight} alt="right" />
                </button>
            </div> 
        </div>
        <div className='best-seller-banners-container'>
            <img src={bannerOne} alt='banner one' />
            <img src={bannerTwo} alt='banner two' />
        </div>
    </div>
  )
}

export default BestSeller
