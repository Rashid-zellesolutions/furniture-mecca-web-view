import React from 'react'
import './AlsoNeed.css';
import imageOne from '../../../Assets/Furniture Mecca/product page/comment images/default_name 7.png';
import imageTwo from '../../../Assets/Furniture Mecca/product page/comment images/default_name 8.png';
import imageThree from '../../../Assets/Furniture Mecca/product page/comment images/default_name 9.png';
import filledStar from '../../../Assets/icons/Star 19.png';
import unFilledStar from '../../../Assets/icons/blue-outline-star.png'

const AlsoNeed = () => {
    const mightNeedData = [
        {
            name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
                filledStar,filledStar,filledStar,filledStar, filledStar
            ], reviewCount: '(200)', img: imageOne 
        },
        {
            name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
                filledStar,filledStar,filledStar,filledStar, filledStar
            ], reviewCount: '(200)', img: imageTwo 
        },
        {
            name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
                filledStar,filledStar,filledStar,filledStar, filledStar
            ], reviewCount: '(200)', img: imageThree 
        }
    ]
  return (
    <div className='might-also-need-products-div'>
        <h3>You Might Also Need</h3>
        <div className='might-also-need-products-slider'>
            {mightNeedData.map((items, index) => {
                return <div className='might-need-product-card'>
                    <div className='might-need-product-image-div'>
                        <img src={items.img} alt='img' />
                    </div>
                    <div>
                        <p className='might-needproduct-name'>{items.name}</p>
                        <p>{items.colorAndCategory}</p>
                        <p>{items.price}</p>
                        {items.filledStars.map((star, index) => (
                            <img src={star} alt='star' />
                        ))}
                        <p>{items.reviewCount}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default AlsoNeed
