import React from 'react'
import './BlogCard.css';
import rightArrowWithooutOutline from '../../../Assets/icons/arrow-right-without-outline-black.png'
// import diningRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-on-cleaning-Leather-Furniture 1.png';
// import livingRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-On-Keeping-Your-Living-Room-Furniture-Clean 1.png';
// import mattressBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Perks-Of-Using-High-Quality-Mattresses-For-Sleeping 1.png';

const BlogCard = ({img, category, title, createdBy, comments}) => {
    // const blogsData = [
    //     {img: diningRoomBlogImage, category: 'Dining Room', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
    //     {img: livingRoomBlogImage, category: 'Dining Room', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
    //     {img: mattressBlogImage, category: 'Dining Room', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
    //     {img: diningRoomBlogImage, category: 'Dining Room', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments'},
    // ]
  return (
    <>
                        <div className='blog-card'>
                            <div className='blog-card-image'>
                                <div className='blog-date-tag'>
                                    <p>30</p>
                                    <p>May</p>
                                </div>
                                <img src={img} alt='img' />
                            </div>
                            <div className='blog-arther-details'>
                                <p>{category}</p>
                                <h3>{title}</h3>
                                <div className='blog-created-by-and-comments'>
                                    <p>By: <span>{createdBy}</span></p>
                                    <hr />
                                    <p>{comments}</p>
                                </div>
                            </div>
                            <div className='blog-para-and-see-more'>
                                <p>
                                    In mattis scelerisque magna, ut tincidunt ex. Quisque nibh urna, pretium in tristique in, 
                                    bibendum sed libero. Pellentesque mauris nunc, pretium non erat non,...
                                </p>
                                <button>
                                    Read more
                                    <img src={rightArrowWithooutOutline} alt='right arrow' />
                                </button>
                            </div>
                        </div>
                    {/* ))} */}
                {/* // </div> */}
                </>
  )
}

export default BlogCard
