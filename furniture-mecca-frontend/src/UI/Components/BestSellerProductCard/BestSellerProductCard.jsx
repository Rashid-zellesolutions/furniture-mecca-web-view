import React from 'react'
import './BestSellerProductCard.css';
import { Link } from 'react-router-dom';

const BestSellerProductCard = ({heartIcon, productMainImage, starIcon, reviews, productName, oldPrice, newPrice, singleProductLink, handleCardClicked}) => {

  return (
    <div className='best-seller-product-card-main-container' to={singleProductLink} onClick={handleCardClicked}>
        <div className='heart-icon-div'>
            <img src={heartIcon} alt='heart' />
        </div>
        <div className='product-main-image-div'>
            <img src={productMainImage} alt='product image' />
        </div>
        <div className='best-seller-rating-div'>
            {starIcon.map((item, index) => {
                return <img src={item.starIcon} alt='star' />
            })}
            <p>{reviews}</p>
        </div>
        <div className='product-name-div'>
            <h3>{productName}</h3>
        </div>
        <div className='best-seller-price-div'>
            <p className='best-sellerdel-price'>{oldPrice}</p>
            <p className='best-seller-new-price'>{newPrice}</p>
        </div>
    </div>
  )
}

export default BestSellerProductCard
