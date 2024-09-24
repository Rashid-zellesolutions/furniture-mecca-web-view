import React, { useState, useRef, useEffect } from 'react';
import './BestSeller.css';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import bannerOne from '../../../Assets/Furniture Mecca/category page/best sellers/banner-1.png';
import bannerTwo from '../../../Assets/Furniture Mecca/category page/best sellers/banner-2.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { IoStar } from "react-icons/io5";


import heartIcon from '../../../Assets/icons/like.png'
import arrowLeft from '../../../Assets/icons/arrow-left.png'
import arrowRight from '../../../Assets/icons/arrow-right.png'
import testImage from '../../../Assets/Furniture Mecca/category page/best sellers/Lisbon-bed-dresser-600x400 1.png'

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

    const itemPerPage = 6
    const maxIndex = Math.ceil(productCardData.length / itemPerPage) -1;
    const [currentIndex, setCurrentIndex] = useState(1)
    const handleIndex = (index) => {
        setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0))
    }

  return (
    <div className='category-besst-seller-main-container'>
        <div className='category-best-seller-cards-section'>
            <div className='category-best-seller-menu'>
                <h3>Best Seller</h3>
                <div className='category-best-seller-menu-items'>
                    {bestSellerNav.map((item, index) => (
                        <p key={index} className={activeItem === index ? 'active' : ''} onClick={() => handleActiveItem(index)}>Living Room</p>
                    ))}
                </div>
            </div>
            <div className='category-products-main-container'>
                {productCardData.slice(currentIndex * itemPerPage, (currentIndex + 1) * itemPerPage).map((item, index) => (
                <BestSellerProductCard
                    key={index}
                    productMainImage={item.mainImage}
                    starIcon={item.ratingStars}
                    reviews={item.reviews}
                    productName={item.productTitle}
                    oldPrice={item.defaultPrice}
                    newPrice={item.priceTag} 
                />
                ))}
            </div>
        </div>
        <div className='category-best-seller-banners-section'>
            <img src={bannerOne} alt='banner one' />
            <img src={bannerTwo} alt='banner one' />
        </div>
    </div>
  )
}

export default BestSeller
