import { createContext, useState, useContext } from "react";

import heartImg from '../../Assets/icons/like.png'
import muellerSofa from '../../Assets/images/Mueller-Sofa-and-Loveseat-01-300x200 1.png';
import dakotaSet from '../../Assets/Furniture Mecca/product archive page/product images/Dakota-Dining-Set-01-600x400 1.png';
import goldDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/Dining-Room-Set-in-Gold-01-600x400 1.png';
import webImage from '../../Assets/Furniture Mecca/product archive page/product images/web-image-600x400 1.png';
import everDeen from '../../Assets/Furniture Mecca/product archive page/product images/everdeen-2-600x400 1.png';
import blackDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/4-3-1-600x400 1.png';
import whiteDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/web-image-4-600x400 1.png';
import brownDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/1-4-600x400 1.png';
import knightDaleSet from '../../Assets/Furniture Mecca/product archive page/product images/Knightdale-Dining-Room-Set-01-600x400 1.png'
import zoraDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/Zora-600x400 1.png'
import sherryImage from '../../Assets/images/Sherry-Set-01-300x200 1.png';
import filledStar from '../../Assets/icons/Star 19.png';
import productTag from '../../Assets/images/product-tag.png';
import star from '../../Assets/icons/Star 19.png' 
import { IoStar } from "react-icons/io5";

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([
        {id: 1, heart: heartImg, mainImage: dakotaSet, hoverImage: goldDiningSet , productTitle: `Trevor Brown 90" Manual Reclining Sofa & 79" Console Loveseat`, ratingStars: [
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
        ], lowPriceAddvertisement: 'Every day Low Prices', 
        reviewCount: '(200)', priceTag: 1198, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: '#FF0000'},
            {color: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 2, heart: heartImg, mainImage: goldDiningSet, hoverImage: dakotaSet , productTitle: `Avenger Black 89'' Power Reclining Sofa & 78'' Reclining Console Loveseat with USB`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(197)', priceTag: 1998, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'Out Of Stock'
        },
        {id: 3, heart: heartImg, mainImage: webImage, productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(218)', priceTag: 998, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
            },
        {id: 4, heart: heartImg, mainImage: everDeen, hoverImage: webImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(150)', priceTag: 4598, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 5, heart: heartImg, mainImage: blackDiningSet, hoverImage: whiteDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 6, heart: heartImg, mainImage: whiteDiningSet, hoverImage: blackDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
        ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
        reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: '#FF0000'},
            {color: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 7, heart: heartImg, mainImage: brownDiningSet, hoverImage: knightDaleSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 8, heart: heartImg, mainImage: dakotaSet, hoverImage: goldDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 9, heart: heartImg, mainImage: goldDiningSet, hoverImage: dakotaSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 10, heart: heartImg, mainImage: everDeen, hoverImage: webImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 11, heart: heartImg, mainImage: whiteDiningSet, hoverImage: blackDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 12, heart: heartImg, mainImage: zoraDiningSet, hoverImage: knightDaleSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 13, heart: heartImg, mainImage: knightDaleSet, hoverImage: zoraDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
    ]);

    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext);