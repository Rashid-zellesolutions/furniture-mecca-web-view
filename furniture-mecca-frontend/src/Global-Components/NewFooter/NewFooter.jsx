import React from 'react'
import './NewFooter.css'
import { Link } from 'react-router-dom'

const NewFooter = () => {

    const footerNavLinks = [
        {
            heading: "Living Room", navItems: [
            {name: 'Living Room Sets', link: '#'},
            {name: 'Sectionals', link: '#'},
            {name: 'Sofas', link: '#'},
            {name: 'Sleeper Sofas', link: '#'},
            {name: 'Love Seats', link: '#'},
            {name: 'Reclining Furniture', link: '#'},
            {name: 'Small Space Living Room', link: '#'},
            {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Bed Room", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Mattresses", navItems: [
                {name: 'Dining Room Sets', link: '#'},
                {name: 'Pub Height Dining Set', link: '#'},
                {name: 'Dining Chairs & Benches', link: '#'},
                {name: 'Dining Tables', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Servers, Buffets & China Cabinets', link: '#'},
            ]
        },
        {
            heading: "Dining Rooms", navItems: [
                {name: 'Living Room Sets', link: '#'},
                {name: 'Sectionals', link: '#'},
                {name: 'Sofas', link: '#'},
                {name: 'Sleeper Sofas', link: '#'},
                {name: 'Love Seats', link: '#'},
                {name: 'Reclining Furniture', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Kids", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Accent", navItems: [
                {name: 'Dining Room Sets', link: '#'},
                {name: 'Pub Height Dining Set', link: '#'},
                {name: 'Dining Chairs & Benches', link: '#'},
                {name: 'Dining Tables', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Servers, Buffets & China Cabinets', link: '#'},
            ]
        },
        {
            heading: "Home Decor", navItems: [
                {name: 'Living Room Sets', link: '#'},
                {name: 'Sectionals', link: '#'},
                {name: 'Sofas', link: '#'},
                {name: 'Sleeper Sofas', link: '#'},
                {name: 'Love Seats', link: '#'},
                {name: 'Reclining Furniture', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Rugs", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Rugs", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
    ]
    
  return (
    <div className='footer-main-container'>
        <div className='footer-menu-links'>
            {footerNavLinks.map((item, index) => {
                return <div className='footer-nav'>
                    <h3>{item.heading}</h3>
                    <div>
                        {item.navItems.map((item, index) => {
                            return <p><Link to={item.link}>{item.name}</Link></p>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default NewFooter
