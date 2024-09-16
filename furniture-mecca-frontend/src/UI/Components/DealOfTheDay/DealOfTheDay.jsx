import React, {useState, useRef, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DealOfTheDay.css';
import { useProducts } from '../../../context/productsContext/productContext';

import DealOfTheDayCard from './DealOfTheDayCard/DealOfTheDayCard';
import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';
import CustomSlider from '../CostumSlider/CostumSlider';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


import testImage from '../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
import star from '../../../Assets/icons/Star 19.png'
import cartIcon from '../../../Assets/icons/big-black-cart.png';
import heartIcon from '../../../Assets/icons/red-heart-without-circle.png';
import combinedArrows from '../../../Assets/icons/combined-arrow-icon.png'

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <img src={leftArrow} alt='arrow' />
    </div>
  )
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <img src={rightArrow} alt='arrow'/>
      </div>
    )
  }

const products = [
  { id: 1, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews',  stock: 11, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 2, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 3, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 4, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 5, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 6, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 7, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 8, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 9, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 10, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 11, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 12, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', newPrice: '$ 1,599.00', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  // Add more products here
];

const DealOfTheDay = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

    // Deal of the day timer
    const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-20T21:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    const padZero = (num) => String(num).padStart(2, '0');

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: padZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: padZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: padZero(Math.floor((difference / 1000 / 60) % 60)),
        seconds: padZero(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Destructure timeLeft
  const { days, hours, minutes, seconds } = timeLeft;

  // products slider script
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 1; // Number of items to show at a time
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsToShow, products.length - itemsToShow));
  };

  const centerStyle = { transform: `translateX(-${currentIndex * (330 / itemsToShow)}px)` };

  return (
    <div className='deal-of-the-day-main-container'> 
          <div className='deal-of-the-day-border-heading'>
            <p>Deal Of The Day</p>
            <div className='deal-of-the-day-end-time'>
              <p>end in: {days}d : {hours}h : {minutes}m : {seconds}s</p>
            </div>
          </div>
      <div className='deal-of-the-day-outer-container'>
          {/* <button className='deal-of-the-day-arrow deal-of-the-day-arrow-left' onClick={handlePrev} disabled={currentIndex === 0}>
            <img src={leftArrow} alt='arrow' />
          </button> */}
          <div className='slider-main-container'>
            <Slider {...settings}>
              {products.map((items, index) => (
                  <div key={index} className='pp-card'>
                      <DealOfTheDayCard productName={items.name} />
                  </div>
              ))}
            </Slider>
          </div>
          {/* <div className='deal-of-the-day-inner-container'>
            <div className='deal-of-the-day-products' style={centerStyle}>
              {products.map((items, index) => (
                <div className='deal-of-the-day-product-slider-items'>
                  <DealOfTheDayCard productName={items.name} />
                </div>
              ))}
            </div>
          </div> */}
          {/* <button className='deal-of-the-day-arrow deal-of-the-day-arrow-rigth' onClick={handleNext} disabled={currentIndex >= products.length - itemsToShow}>
            <img src={rightArrow} alt='arrow' />
          </button> */}
      </div>

      {/* <div className='slider-outer-container'>
      <div className='deal-of-the-day-border-heading'>
            <p>Deal Of The Day</p>
            <div className='deal-of-the-day-end-time'>
              <p>end in: {days}d : {hours}h : {minutes}m : {seconds}s</p>
            </div>
          </div>
        <div className='slider-main-container'>
          <Slider {...settings}>
          {products.map((items, index) => (
              <div key={index} className='pp-card'>
                  <DealOfTheDayCard productName={items.name} />
              </div>
          ))}
          </Slider>
      </div>
      </div> */}
  </div>
  )
}

export default DealOfTheDay
