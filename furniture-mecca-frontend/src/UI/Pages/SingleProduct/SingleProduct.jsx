import React, { useContext, useEffect } from 'react'
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
import InstaTwoImageGallery from '../../Components/InstaTwoImageGallery/InstaTwoImageGallery'
import { useProducts } from '../../../context/productsContext/productContext'

const SingleProduct = () => {
  // const location = useLocation();
  // const productCard = location.state || {};
  // console.log("Card Data", productCard);
  // const dynamicData = productCard.productCard || productCard.products
  // console.log("Dynamic Card Data ", dynamicData)

  // const {products} = useProducts()
  const {slug} = useParams();
  console.log('product id', slug)
  console.log('type of id',typeof slug)
  const products = useProducts();
  console.log("products on single page", products)
  // const product = products.find((item) => item.slug === slug)

  
  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    handleClickTop()
  }, [products]);
  
  if(!products){
    return <div>Product Not Found</div>
  }

  return (
    <div>
        <SingleProductStickySection productData={products} />
        <SimillerProducts />
        <FrequentlyBought />
        <RatingAndReview />
        <CustomerPhotos />
        <ProductComments />
        {/* <ShippingReturn /> */}
        {/* <MoreToExplore /> */}
        <OutdoorFaves />
        {/* <ShipBanner bannerImg={attentionBanner} paddindTrue={true} /> */}
        
        {/* <InstaTwoImageGallery /> */}
        {/* <CategoriesGetScop /> */}
        {/* <CustomerServicePanel /> */}
    </div>
  )
}

export default SingleProduct

