import React, {useRef, useEffect, useState} from 'react';
import './DealOfTheDayCard.css';
import testImage from '../../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
import star from '../../../../Assets/icons/Star 19.png'
import cartIcon from '../../../../Assets/icons/big-black-cart.png';
import heartIcon from '../../../../Assets/icons/red-heart-without-circle.png';
import combinedArrows from '../../../../Assets/icons/combined-arrow-icon.png'
import leftArrow from '../../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../../Assets/icons/right-arrow-white.png';


const products = [
  { id: 1, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews',  stock: 11, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 2, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 3, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 4, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 5, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 6, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 7, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 8, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 9, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 10, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 11, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 12, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  // Add more products here
];

const DealOfTheDayCard = ({productName}) => {
  const cardIcons = [cartIcon, heartIcon, combinedArrows];
    
  return (
    <div className='deal-of-the-day-product-card'>
      <div className='deal-of-the-day-product-rating-and-name'>
        <div className='deal-of-the-day-rating-and-reviews'>
          {[0,1,2,3,4,5].map((items, innIndex) => (
            <img src={star} alt='star' />
          ))}
          <p>(200 reviews)</p>
        </div>
        <h3 className='deal-of-the-day-product-name'>{productName}</h3>
        <div className='deal-of-the-day-price'>
          <del>$ 199.00</del>
          <p>$ 1,599.00</p>
        </div>
      </div>
      <div className='deal-of-the-day-product-image'>
        <img src={heartIcon} alt='heart' className='deal-of-the-day-product-image-heart-icon' />
        <div className='deal-of-the-day-product-discount'><p>-12%</p></div>
        <img src={testImage} alt='img' />
        <div className='deal-of-the-day-card-icons-div'>
          {cardIcons.map((items, index) => (
            <button key={index} className='deal-of-the-day-icon'>
              <img src={items} alt='icon' />
            </button>
          ))}
        </div> 
      </div>
      <div className='deal-of-the-day-product-under-line'></div>
    </div>
  );
};

export default DealOfTheDayCard;
