import React, { useEffect } from 'react'
import './SingleProduct.css'
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel'
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop'
import SingleProductStickySection from '../../Components/SingleProductStickySection/SingleProductStickySection'
import SimillerProducts from '../../Components/SimillerProducts/SimillerProducts'
import FrequentlyBought from '../../Components/FrequentlyBought/FrequentlyBought'
import RatingAndReview from '../../Components/RatingAndReview/RatingAndReview'
import CustomerPhotos from '../../Components/CustomerPhotos/CustomerPhotos'
import ProductComments from '../../Components/ProductComments/ProductComments'
import ShippingReturn from '../../Components/ShippingReturn/ShippingReturn'
import MoreToExplore from '../../Components/MoreToExplore/MoreToExplore'
import OutdoorFaves from '../../Components/OutdoorFaves/OutdoorFaves'
import ShipBanner from '../../Components/ShipBanner/ShipBanner'
import attentionBanner from '../../../Assets/images/attention-banner.png'
import { useLocation, useParams } from 'react-router-dom'
import InstaGallery from '../../Components/InstaGallery/InstaGallery'
import Shopvia from '../../Components/ShopViaBanner/Shopvia'
import { useDispatch } from 'react-redux'

const SingleProduct = () => {
  const location = useLocation();
  const productCard = location.state || {};
  console.log("Card Data", productCard);
  const dynamicData = productCard.productCard || productCard.products
  // console.log("Dynamic Card Data ", dynamicData)
  
  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    handleClickTop()
  }, [productCard]);
  
  if(!productCard){
    return <div>Product Not Found</div>
  }

  // const dispatch = useDispatch;
  //   const {productId} = useParams();
  //   const product = productCard.find((product) => String((productCard.id) === productId))
  //   const handleAdd = (product) => {
  //       dispatch(add(product))
  //   }

  return (
    <div>
        <SingleProductStickySection productCard={dynamicData} />
        <SimillerProducts />
        <FrequentlyBought />
        <RatingAndReview />
        <CustomerPhotos />
        <ProductComments />
        {/* <ShippingReturn /> */}
        {/* <MoreToExplore /> */}
        <OutdoorFaves />
        <ShipBanner bannerImg={attentionBanner} paddindTrue={true} />
        <InstaGallery />
        {/* <CategoriesGetScop /> */}
        {/* <CustomerServicePanel /> */}
    </div>
  )
}

export default SingleProduct

