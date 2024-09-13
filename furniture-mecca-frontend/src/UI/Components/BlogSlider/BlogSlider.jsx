import React, { useEffect, useState } from 'react';
import './BlogSlider.css';
import diningRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-on-cleaning-Leather-Furniture 1.png';
import livingRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-On-Keeping-Your-Living-Room-Furniture-Clean 1.png';
import mattressBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Perks-Of-Using-High-Quality-Mattresses-For-Sleeping 1.png';
import CustomSlider from '../CostumSlider/CostumSlider';
import BlogCard from './BlogCard';

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

    const slides = blogsData.map((item, index) => (
        <BlogCard key={index} img={item.img} category={item.category} title={item.title} createdBy={item.createdBy} comments={item.comments} />
      ));

    

    return (
        <div className='blogs-main-container'>
            <h3>Exciting Blogs Created By <span>Furniture Mecca</span></h3>
            <p className='blogs-main-para'>
                Captivating narratives by Jasons Furniture Outlet, where each blog tells a unique tale of style,
                comfort, and functionality. Discover the enchanting stories behind every furnishing at The Furniture Depots,
                turning your home into a haven filled with both charm and character.
            </p>
            <div className='blog-cards-container'>
                 <CustomSlider
                    cards={slides}
                    visibleCards={3}
                    showArrows={true}
                    showDots={true}
                />
            </div>
        </div>
    );
}

export default BlogSlider;
