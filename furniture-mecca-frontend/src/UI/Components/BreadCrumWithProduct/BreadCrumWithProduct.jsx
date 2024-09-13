import React from 'react'
import './BreadCrumWithProduct.css';
// import imageOne from '../../../Assets/category/brown-soffa.png';
// import imageTwo from '../../../Assets/category/white-soffa.png';
// import imageThree from '../../../Assets/category/black-soffa.png'

const BreadCrumWithProduct = ({breadcrumRecentData}) => {

  return (
    <div className='breadcrum-with-products'>
        <div className='breadcrum'>
            <p> <a href='#'>Home</a> / <a href='#'> Furniture</a> / <a href='#'>Living Room</a> / <a href='#'> Living Room Sets</a> </p>
        </div>
        <div className='breadcrum-products-container'>
                {breadcrumRecentData.map((item, index) => {
                    return <div className='single-product'>
                      <div className='breadcrum-product-image'>
                        <img src={item.img} alt='img' />
                      </div>
                        <p>{item.title}</p>
                    </div>
                })}
        </div>
    </div>
  )
}

export default BreadCrumWithProduct
