import React, {useState} from 'react'
import './SimillerProducts.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import arrowLeftRed from '../../../Assets/icons/arrow-left-red.png';
import arrowRightRed from '../../../Assets/icons/arrow-right-red.png';

const SimillerProducts = () => {

    const productData = useSelector((state) => state.products.data)
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hideFilters, setHideFilters] = useState(false);

    // Change image on hover function
    const handleImageHover = (index) => {
      setHoveredIndex(index);
    };

    const handleImageHoverLeave = () => {
      setHoveredIndex(null);
    };

    // Card title words limit
    const maxLength = 30;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    // Select Color Variations Functions
    const [selectedColorIndices, setSelectedColorIndices] = useState(Array(productData.length).fill(0));
    const handleVariantImageClick = (cardIndex, colorIndex) => {
        const updatedIndices = [...selectedColorIndices];
        updatedIndices[cardIndex] = colorIndex;
        setSelectedColorIndices(updatedIndices);
    };

    // product color variation index from redux
    const colorIndex = useSelector((state) => state.colorIndex.colorIndex)

    const scrollContainerRef = useRef(null);
    const cardWidth = 310; // Adjust the width of your cards here
    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction * cardWidth * 4;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Prevent dragging to scroll
    const handleMouseDown = (e) => {
        e.preventDefault();
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
    };
    
  return (
    <div className='similler-products-main-container'>
        <h3>Try These Instead</h3>
        <div className='similler-products-wrapper' onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}>
            <button
                className='scroll-button left'
                onClick={() => handleScroll(-1)}
            >
                <img src={arrowLeftRed} alt='arrow-left' />
            </button>
            <div className='similler-products-cards' ref={scrollContainerRef}>
                {productData.slice(0, 12).map((item, index) => (
                    <ProductCard
                        key={index}
                        maxWidthAccordingToComp={'100%'} justWidth={'310px'}
                        tagIcon={item.productTag ? item.productTag : item.heart}
                        tagClass={` ${item.productTag ? 'tag-img' : 'heart-icon'}`}
                        tagDivClass={`${item.productTag ? 'product-tag-div' : 'heart-icon-div'}`}
                        mainImage={hoveredIndex === index && item.hoverImage ? item.hoverImage : item.mainImage}
                        productCardContainerClass={`product-card ${hideFilters ? 'card-width-increase' : ''}`}
                        mouseEnter={() => handleImageHover(index)}
                        mouseLeave={handleImageHoverLeave}
                        ProductTitle={truncateTitle(item.productTitle, maxLength)}
                        stars={item.ratingStars}
                        reviewCount={item.reviewCount}
                        lowPriceAddvertisement={item.lowPriceAddvertisement}
                        priceTag={item.priceTag}
                        financingAdd={item.financingAdd}
                        learnMore={item.learnMore}
                        colorVariation={item.colorVariation}
                        mainIndex={index}
                        deliveryTime={item.deliveryTime}
                        selectedColorIndices={selectedColorIndices}
                        handleVariantColor={() => handleVariantImageClick(index, colorIndex)}
                        borderLeft={index % 4 === 3}
                    />
                ))}
            </div>
            <button
                className='scroll-button right'
                onClick={() => handleScroll(1)}
            >
                <img src={arrowRightRed} about='arrow-right' />
            </button>
        </div>
    </div>
  )
}
export default SimillerProducts