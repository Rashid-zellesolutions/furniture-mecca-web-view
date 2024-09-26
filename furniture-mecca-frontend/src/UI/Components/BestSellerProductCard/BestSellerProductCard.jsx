import React from 'react'
import './BestSellerProductCard.css';
import heartIcon from '../../../Assets/icons/like.png'

const BestSellerProductCard = ({ productMainImage, starIcon, reviews, productName, oldPrice, newPrice, singleProductLink, handleCardClicked}) => {

    const maxLength = 40;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

  return (
    <div className='category-product-card'>
        <div className='category-product-image'>
            <img src={productMainImage} alt='product image' />
        </div>
        <div className='category-product-rating-section'>
            <div className='category-product-rating-stars'>
                {starIcon.map((item, index) => (
                    <p>{<item.starIcon />}</p>
                ))}
            </div>
            <p>({reviews})</p>
        </div>
        <div className='category-product-name'>
            <h3>{truncateTitle(productName, maxLength)}</h3>
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
