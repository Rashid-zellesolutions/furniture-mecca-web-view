import React, { useEffect, useState } from 'react';
import './BlogSlider.css';
import diningRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-on-cleaning-Leather-Furniture 1.png';
import livingRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-On-Keeping-Your-Living-Room-Furniture-Clean 1.png';
import mattressBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Perks-Of-Using-High-Quality-Mattresses-For-Sleeping 1.png';
import CustomSlider from '../CostumSlider/CostumSlider';
import BlogCard from './BlogCard';
import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';

const BlogSlider = () => {

    const blogsData = [
        {img: diningRoomBlogImage, category: 'Dining Room 1', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: livingRoomBlogImage, category: 'Dining Room 2', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: mattressBlogImage, category: 'Dining Room 3', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 4', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 5', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 6', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 7', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 8', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 9', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 10', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
    ]

    // const slides = blogsData.map((item, index) => (
    //     <BlogCard key={index} img={item.img} category={item.category} title={item.title} createdBy={item.createdBy} comments={item.comments} />
    //   ));
      // products slider script
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsToShow = 1; // Number of items to show at a time
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsToShow, blogsData.length - itemsToShow));
    };

    const centerStyle = { transform: `translateX(-${currentIndex * (440 / itemsToShow)}px)` };
    

    return (
        <div className='blogs-main-container'>
            <h3>Exciting Blogs Created By <span>Furniture Mecca</span></h3>
            <p className='blogs-main-para'>
                Captivating narratives by Jasons Furniture Outlet, where each blog tells a unique tale of style,
                comfort, and functionality. Discover the enchanting stories behind every furnishing at The Furniture Depots,
                turning your home into a haven filled with both charm and character.
            </p>

            <div className='blog-main-outer-container'>
                <button className='blog-slider-arrow deal-of-the-day-arrow-left' onClick={handlePrev} disabled={currentIndex === 0}>
                    <img src={leftArrow} alt='arrow' />
                </button>
                <div className='deal-of-the-day-inner-container'>
                    <div className='deal-of-the-day-products' style={centerStyle}>
                    {blogsData.map((item, index) => (
                        <div className='blog-product-slider'>
                        <BlogCard key={index} img={item.img} category={item.category} title={item.title} createdBy={item.createdBy} comments={item.comments} />
                        </div>
                    ))}
                    </div>
                </div>
                <button className='blog-slider-arrow deal-of-the-day-arrow-rigth' onClick={handleNext} disabled={currentIndex >= blogsData.length - itemsToShow}>
                    <img src={rightArrow} alt='arrow' />
                </button>
            </div>
            {/* <div className='blog-cards-container'>
                 <CustomSlider
                    cards={slides}
                    visibleCards={3}
                    showArrows={true}
                    showDots={true}
                />
            </div> */}
        </div>
    );
}

export default BlogSlider;
