import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Category from '../../Components/Category/Category';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
// import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';
import ImageHeading from '../../Components/ImageHeading/ImageHeading';


import tuxedoChair from '../../../Assets/Furniture Mecca/Landing Page/feature products/ma-tax-free_multiple-collection-image2_desktop_su7kxr 1.png'
import vikingImage from '../../../Assets/Furniture Mecca/Landing Page/feature products/ma-tax-free_multiple-collection-image3_desktop_xxwngg 2.png'
// import journeyImage from '../../../Assets/Furniture Mecca/Landing Page/feature products/ma-tax-free_multiple-collection-image4_desktop_dvojd3 1.png'

// images for heading
import HeroImage from '../../../Assets/Furniture Mecca/Landing Page/Slider/hp-fourth_hero_mo_desktop_1_3200x1388 (3).png';
import mobileViewHeroImage from '../../../Assets/Furniture Mecca/Landing Page/Slider/mobile-view-banner.png';
import GetTheScop from '../../Components/GetTheScop/GetTheScop';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
// import FurnitureProduct from '../../Components/FurnitureProducts/FurnitureProduct';
import Slider from '../../../Global-Components/Slider/Slider';
// import Shopvia from '../../Components/ShopViaBanner/Shopvia';
// import AllStores from '../../Components/AllStoresLocation/AllStores';
import BlogSlider from '../../Components/BlogSlider/BlogSlider';
import NearStorePopUp from '../../Components/NearStorePopUp/NearStorePopUp';

// Category Images

import newArrivalImage from '../../../Assets/category/new-arrival.png';
import livingRoomImage from '../../../Assets/category/living-room.png';
import diningImage from '../../../Assets/category/dining.png';
import bedroomImage from '../../../Assets/category/badroom.png';
import outDoorImage from '../../../Assets/category/out-door.png';
import recliningImage from '../../../Assets/category/reclining.png';
import SectionaSofa from '../../../Assets/to-be-change/sectional-sofa.png';
import Mattresses from '../../../Assets/to-be-change/mattresses.png';
import HomeOffice from '../../../Assets/to-be-change/home-office.png';
import KidsRoom from '../../../Assets/to-be-change/kids-room.png';
import AreaRugs from '../../../Assets/to-be-change/area-rugs.png';
import HomeDecor from '../../../Assets/to-be-change/home-decor.png';
import Outlet from '../../../Assets/to-be-change/outlet.png';
import shipBanner from '../../../Assets/Home-Page/At Furniture Mecca Slider 1.png'
import HottestDealsBanners from '../../Components/HottestDealsBanners/HottestDealsBanners';
import BestSellerSlider from '../../Components/BestSellerSlider/BestSellerSlider';
// import DealDayCountDown from '../../Components/DealDayCountDown/DealDayCountDown';
import InstaGallery from '../../Components/InstaGallery/InstaGallery';
import FinanceBannerSlider from '../../Components/FinanceBannerSlider/FinanceBannerSlider';
import Comparision from '../../Components/Comparision/Comparision';
import DealOfTheDay from '../../Components/DealOfTheDay/DealOfTheDay';
import TrendingNow from '../../Components/TrendingNow/TrendingNow';


const Home = () => {
  
  
  const productCardData = [
    {   heading: 'Tuxedo', productImageHeading: 'tuxedo Power Reclining Sofa', 
        productImagePrice: '$999', productImageAbout: "Furniture Mecca everyday low price", 
        btnText: 'Shop Tuxedo', img : tuxedoChair, productLink: '#',
        para: `With smooth, comfy seating, built-in charging ports AND cupholders, 
        my Tuxedo collection is dressed to impress! the viking`
    },
    {   heading: 'Viking', btnText: 'Shop Viking', productImageHeading: 'Viking Power Reclining Sofa', 
        productImagePrice: '$999', productImageAbout: "Furniture Mecca everyday low price", img : vikingImage, 
        para: `On-trend and feature-packed with storage, charging ports, 
        and a reading light? There’s no better place to relax than Viking!`
    },
    {  heading: 'Journey', btnText: 'Shop Journey', productImageHeading: 'Journey Power Reclining Sofa', 
      productImagePrice: '$999', productImageAbout: "Furniture Mecca everyday low price", img : tuxedoChair, 
        para: `Customize your journey to comfort town with this collection’s adjustable 
        headrest, zero-gravity recline, and charging ports!`
    },
]

const categoryCardData = [
  {title: "New Arrival", img: newArrivalImage, link: '#'},
  {title: "Living Room", img: livingRoomImage, link: '#'},
  {title: "Dining", img: diningImage, link: '#'},
  {title: "Bedroom", img: bedroomImage, link: '#'},
  {title: "Outdoor", img: outDoorImage, link: '#'},
  {title: "Reclining Furniture", img: recliningImage, link: '#'},
  {title: "Sectional Sofas", img: SectionaSofa, link: '#'},
  {title: "Mattresses", img: Mattresses, link: '#'},
  {title: "Home Office", img: HomeOffice, link: '#'},
  {title: "Kids Room", img: KidsRoom, link: '#'},
  {title: "Area Rugs", img: AreaRugs, link: '#'},
  {title: "Home Decor", img: HomeDecor, link: '#'},
  {title: "Outlet", img: Outlet, link: '#'},
]

 


  return (
    <div className='home-page-main-container'>
      <NearStorePopUp />
      <Slider />
      <ShipBanner bannerImg={shipBanner} paddindTrue={false} />
      <Category title={'Shop by Category'} categoryData={categoryCardData} />
      {/* <HottestDealsBanners /> */}
      <TrendingNow />
      <FinanceBannerSlider />
      {/* <BestSellerSlider /> */}
      {/* <FurnitureProduct /> */}
      <ImageHeading img={HeroImage} mobileViewImage={mobileViewHeroImage} alt={'bed image'} />
      <ProductSlider cardData={productCardData} />
      <Comparision />
      {/* <DealDayCountDown /> */}
      <DealOfTheDay />
      <GetTheScop />
      <BlogSlider />
      <InstaGallery />
      {/* <CustomerServicePanel /> */}
    </div>
  )
}

export default Home
