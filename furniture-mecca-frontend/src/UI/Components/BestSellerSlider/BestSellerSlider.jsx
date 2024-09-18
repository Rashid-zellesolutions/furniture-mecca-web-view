import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BestSellerSlider.css';
import BestSellerSliderMainBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Home Page Banner 396x595.jpg';
import bestSellerMainSecondImage from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Bedroom Side Banners 2 (2).png';
import heartIcon from '../../../Assets/icons/like.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const BestSellerSlider = () => {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizer);
        return () => window.removeEventListener("resize", handleResizer)
    } )


    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    
    const [loading, setLoading] = useState(false); 
    const [activeItem, setActiveItem] = useState(0)
    const navigate = useNavigate()

    const handleActiveItem = (index) => {
        setActiveItem(index)
        setLoading(true); // Show loader
        setTimeout(() => {
            setActiveItem(index);
            setLoading(false); // Hide loader after 2 seconds
        }, 1000);
    }
    const productCardData = useSelector((state) => state.productCard.data)
    console.log("products length after", productCardData.length)
    const handleProductClick = (item) => {
        navigate(`/single-product/${item.id}`, { state: { productCard: item } });
        console.log(`card clicked /single-product/${item.id}`)
    };
    
    // product slice to show 6 product maxx

    


    const cardsPerPage = 6; // Number of cards per page
    const totalPages = Math.ceil(productCardData.length / cardsPerPage); // Total number of pages
    const [currentIndex, setCurrentIndex] = useState(0); // Current page index

    // Helper function to get the cards for the current page
    const getCurrentCards = () => {
        const start = currentIndex * cardsPerPage;
        return productCardData.slice(start, start + cardsPerPage);
    };

    // Handle page change
    const handlePageChange = (index) => {
        setCurrentIndex(index);
    };



    


  return (
    <div className="best-seller-slider-container"> 
        <div className='best-seller-imaage-and-cards'>
        <div className='best-seller-slider-main-banner'>
            <img src={activeItem === 0 ?  BestSellerSliderMainBanner : bestSellerMainSecondImage} alt='main banner' />
        </div>
        <div className='best-seller-slider-div'>
            <div className='best-seller-slider-menu-bar'>
                <h3>Best Seller</h3>
                <div className='best-seller-menu-bar'>
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
            <div className='best-seller-slider-main-banner-mobile-view'>
                <img src={activeItem === 0 ?  BestSellerSliderMainBanner : bestSellerMainSecondImage} alt='main banner' />
            </div>
            <div className='products-slider-container'>
                <div className='best-seller-slider' style={{ transform: `translateX(-${(currentIndex / totalPages) * 100}%)` }}>
                    {productCardData.slice(currentIndex, currentIndex + cardsPerPage).map((item, index) => (
                        <div key={index} className='best-seller-product-card-div' /* onClick={() => handleProductClick(item)} */ >
                            <div className='best-seller-product-main-image-div'>
                                <img src={item.mainImage} alt='img' className='best-seller-product-main-image' />
                            </div>
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
            </div>
        </div>
        </div>
        <div className='pagination-dots'>
            {Array.from({ length: totalPages }, (_, index) => (
                <span 
                    key={index} 
                    className={`dot ${currentIndex === index ? 'active' : ''}`} 
                    onClick={() => handlePageChange(index)}
                ></span>
            ))}
        </div>
    </div>
  );
};

export default BestSellerSlider;
