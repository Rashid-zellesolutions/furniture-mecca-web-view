import React from 'react'
import './BestSellerProductCard.css';
import { Link } from 'react-router-dom';

import testImage from '../../../Assets/Furniture Mecca/category page/best sellers/Lisbon-bed-dresser-600x400 1.png'
import { IoStar } from "react-icons/io5";
import heartIcon from '../../../Assets/icons/like.png'

const BestSellerProductCard = ({ productMainImage, starIcon, reviews, productName, oldPrice, newPrice, singleProductLink, handleCardClicked}) => {

  return (
    // <div className='best-seller-product-card-main-container' to={singleProductLink} onClick={handleCardClicked}>
    //     <div className='heart-icon-div'>
    //         <img src={heartIcon} alt='heart' />
    //     </div>
    //     <div className='product-main-image-div'>
    //         <img src={productMainImage} alt='product image' />
    //     </div>
    //     <div className='best-seller-rating-div'>
    //         {starIcon.map((item, index) => {
    //             return <img src={item.starIcon} alt='star' />
    //         })}
    //         <p>{reviews}</p>
    //     </div>
    //     <div className='product-name-div'>
    //         <h3>{productName}</h3>
    //     </div>
    //     <div className='best-seller-price-div'>
    //         <p className='best-sellerdel-price'>{oldPrice}</p>
    //         <p className='best-seller-new-price'>{newPrice}</p>
    //     </div>
    // </div>
    <div className='category-product-card'>
        <div className='category-product-image'>
            <img src={productMainImage} alt='product image' />
        </div>
        <div className='category-product-rating-section'>
            <div className='category-product-rating-stars'>
                {starIcon.map((item, index) => (
                    // <IoStar key={index} size={14} />
                    <p>{<item.starIcon />}</p>
                ))}
            </div>
            <p>({reviews})</p>
        </div>
        <div className='category-product-name'>
            <h3>{productName}</h3>
        </div>
        <div className='category-product-price-and-heart'>
            <div className='category-product-price'>
                <del>{oldPrice}</del>
                <p>{newPrice}</p>
            </div>
            <img src={heartIcon} alt='heart' />
        </div>
    </div>
  )
}

export default BestSellerProductCard
