import React, {useState, useEffect, useRef} from 'react'
import './ProductCard.css';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setColorIndex } from '../../../Redux/ColorIndex/ColorINdexSlicer';
import cartIcon from '../../../Assets/icons/cart-white.png'
import cartBlack from '../../../Assets/icons/cart-black.png';
import eyeBlack from '../../../Assets/icons/eye-black.png';
import eyeWhite from '../../../Assets/icons/eye-white.png';
import namer from 'color-namer';

const ProductCard = ({tagIcon, tagClass, mainImage, productCardContainerClass, mouseEnter, mouseLeave, ProductTitle, stars, reviewCount, lowPriceAddvertisement,
    priceTag, financingAdd, handleQuickView, learnMore, colorVariation, handleAddToCart, handleCartSectionOpen, mainIndex, deliveryTime, handleVariantColor, selectedColorIndices, maxWidthAccordingToComp, borderLeft, justWidth, handleCardClick
}) => {
    
    const [cartClicked, setCartClicked] = useState(true);
    
    const dispatch = useDispatch();
    const selectedColorIndex = useSelector((state) => state.colorIndex.colorIndex);
    const handleColorVariationIndex = (colorIndex) => {
        dispatch(setColorIndex(colorIndex))
    }

    const handleClick = (colorIndex, color) => {
        dispatch(setColorIndex(colorIndex));
        if (handleVariantColor) {
            handleVariantColor();
        }
    };

    const [cardHovered, setCardHovered] = useState(false);
    const handleMouseEnter = () => {
        setCardHovered(true)
        console.log(cardHovered);
    }

    const handleMouseLeave = () => {
        setCardHovered(false);
    }

    const [quickViewHovered, setQuickViewHovered] = useState(false);
    const handleQuickViewHover = () => {
        setQuickViewHovered(true);
    }
    const handlQuickViewLeave = () => {
        setQuickViewHovered(false)
    }

    
    
  return (
    <>
        <div className={`${productCardContainerClass} ${borderLeft ? 'hide-after' : ''} `} style={{maxWidth: maxWidthAccordingToComp, width: justWidth}}>
            <div className='product-card-data'>
                <div className='tag-and-heart'>
                    <h3>In Stock</h3>
                    <img src={tagIcon} alt='heart img' className={tagClass} />
                </div>
                <div className='product-main-image-container'>
                    <img src={mainImage}  
                        alt='product img' className='product-main-img' 
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave} />
                        <div className='overlay-buttons'>
                            <button className={`overlay-button ${cartClicked ? 'loading' : ''}`} onClick={handleCartSectionOpen} /* onClick={handleAddToCart} */ onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img src={cardHovered ? cartIcon : cartBlack} alt='cart' />
                                Add to cart
                            </button>
                            <button className='overlay-button' onClick={handleQuickView} onMouseEnter={handleQuickViewHover} onMouseLeave={handlQuickViewLeave}>
                                {/* <img src={cardHovered ? eyeWhite : eyeIcon} alt="eye icon" /> */}
                                <img src={quickViewHovered ? eyeWhite : eyeBlack} alt='cart' />
                                Quick View
                            </button>
                        </div>
                </div>

                <p className='product-title' onClick={handleCardClick}> <Link> {ProductTitle} </Link> </p>
                <div className='product-rating-stars-div'>
                    {stars.map((stars, starIndex) => {
                        // return <img key={starIndex} src={stars.icon} alt={stars.title} className='rating-star' />
                        return <i> {<stars.icon />}</i>
                    })}
                    <p>{reviewCount}</p>
                </div>
                <p className='product-low-price-addvetisement'>{lowPriceAddvertisement}</p>
                <h3 className='product-price-tag'>$ {priceTag}</h3>
                <div className='product-financing-addvertisement-div'>
                <p>{financingAdd}</p>
                <a href='#'>{learnMore}</a>
            </div>
            <div className='color-variation-div'>
                {colorVariation.map((color, colorIndex) => {
                    return <span key={colorIndex} className='color-variation' onClick={() => handleClick(colorIndex, color)}
                    style={{
                        backgroundColor: `${color.color}`,
                        border: selectedColorIndices[mainIndex] === colorIndex ? `1px solid ${color.color}` : 'none',
                        boxShadow: selectedColorIndices[mainIndex] === colorIndex ? `inset 0 0 0 2px #FFFF` : ''
                    }}></span>
                })}
            </div>
                <p className='product-delivery-time'>{deliveryTime}</p>
            </div>
        </div>

        
    </>
  )
}

export default ProductCard
