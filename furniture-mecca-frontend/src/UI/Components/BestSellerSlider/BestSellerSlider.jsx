import React, { useState, useRef, useEffect } from 'react';
import './BestSellerSlider.css';
import BestSellerSliderMainBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Bedroom Side Banners 2 (2).png';
import bestSellerMainSecondImage from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Bedroom Side Banners 1.png';
import heartIcon from '../../../Assets/icons/like.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';



const BestSellerSlider = () => {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizer);
        return () => window.removeEventListener("resize", handleResizer)
    } )

    // console.log("browser width", width);

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

    let itemPerPage = productCardData.length;
    if((width > 480) && (width < 995 )){
        itemPerPage = 4;
    }else if(width > 994){
        itemPerPage = 6
    }
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalPages = Math.ceil(productCardData.length / itemPerPage);

    const handleDotsClick = (index) => {
        setCurrentIndex(index);
        setLoading(true); // Show loader
        setTimeout(() => {
            setActiveItem(index);
            setLoading(false); // Hide loader after 2 seconds
        }, 1000);
    }
    console.log("products length before", productCardData.length)

    const displayProducts = productCardData.slice(currentIndex * itemPerPage, (currentIndex + 1) * itemPerPage);



    


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
                {loading && <Loader />} {/* Show loader when loading */}
                <div className='best-seller-slider'>
                    {/* {productCardData.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((item, index) => ( */}
                    {displayProducts.map((item, index) => (
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
                    onClick={() => handleDotsClick(index)}
                ></span>
            ))}
        </div>
    </div>
  );
};

export default BestSellerSlider;
