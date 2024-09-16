import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BlogSlider.css';
import diningRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-on-cleaning-Leather-Furniture 1.png';
import livingRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-On-Keeping-Your-Living-Room-Furniture-Clean 1.png';
import mattressBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Perks-Of-Using-High-Quality-Mattresses-For-Sleeping 1.png';
import BlogCard from './BlogCard';
import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`blog-arrow ${className}`} >
        <img src={leftArrow} alt='arrow' />
      </div>
    )
    }
  
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return(
        <div onClick={onClick} className={`blog-arrow ${className}`} >
          <img src={rightArrow} alt='arrow'/>
        </div>
      )
    }

const BlogSlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const maxLength = 50;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title; 
    };

    const blogsData = [
        {img: diningRoomBlogImage, category: 'Dining Room 1', title: 'Advantages Of Purchasing a Firm Mattress', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: livingRoomBlogImage, category: 'Dining Room 2', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: mattressBlogImage, category: 'Dining Room 3', title: 'How To Choose the Ideal Furniture Shop for Your House', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 4', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 5', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 6', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 7', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 8', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 9', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
        {img: diningRoomBlogImage, category: 'Dining Room 10', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
    ]
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
            <div className='blogs-slider-main-container'>
            <   Slider {...settings}>
                    {blogsData.map((item, index) => (
                        <div key={index} className='blog-cards-container'>
                            <BlogCard key={index} img={item.img} category={item.category} title={truncateTitle(item.title, maxLength)} createdBy={item.createdBy} comments={item.comments} />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <div className='blog-main-outer-container'> */}
                {/* <Slider {...settings}>
                    {blogsData.map((item, index) => (
                        <div key={index} className='pp-card'>
                            <BlogCard key={index} img={item.img} category={item.category} title={truncateTitle(item.title, maxLength)} createdBy={item.createdBy} comments={item.comments} />
                        </div>
                    ))}
                </Slider> */}
                {/* <button className='blog-slider-arrow blog-arrow-left' onClick={handlePrev} disabled={currentIndex === 0}>
                    <img src={leftArrow} alt='arrow' />
                </button> */}
                {/* <div className='blog-inner-container'>
                    <div className='blog-cards-container' style={centerStyle}>
                    {blogsData.map((item, index) => (
                        <div className='blog-product-slider'>
                        <BlogCard key={index} img={item.img} category={item.category} title={truncateTitle(item.title, maxLength)} createdBy={item.createdBy} comments={item.comments} />
                        </div>
                    ))}
                    </div>
                </div> */}
                {/* <div className='blog-slider-main-container'> */}
                    
                {/* </div> */}
                {/* <button className='blog-slider-arrow blog-arrow-right' onClick={handleNext} disabled={currentIndex >= blogsData.length - itemsToShow}>
                    <img src={rightArrow} alt='arrow' />
                </button> */}
            {/* </div> */}
        </div>
    );
}

export default BlogSlider;
