import React, {useState, useEffect} from 'react'
import './Haider.css';
import logo from '../../Assets/Logo/m_logo_360 2.png'
import searchIcon from '../../Assets/icons/search-icon-charcol.png';
import NearStoreIcon from '../../Assets/icons/home.png';
import HeartIcon from '../../Assets/icons/like.png';
import cartIcon from '../../Assets/icons/cart2.png';
import profileIcon from '../../Assets/icons/profile.png'
import deliverTo from '../../Assets/icons/delivery.png'
import locationModalIcon from '../../Assets/icons/location.png'
import locationIcon from '../../Assets/icons/location-red.png';
import navToggler from '../../Assets/icons/Union.png'
import searchRed from '../../Assets/icons/search-red.png'
import Nav from '../Navbar/Nav';
import TabMenu from '../Navbar/TabMenu/TabMenu';
import NearStorePopUp from '../../UI/Components/NearStorePopUp/NearStorePopUp';
import { MdOutlineStars } from "react-icons/md";
import { Link } from 'react-router-dom';

// language mdal assets
import closeBtn from '../../Assets/icons/close-btn-black.png';
import protgalFlage from '../../Assets/icons/portugal-flage.png';
import franceFlage from '../../Assets/icons/france-flage.png';
import usaFlag from '../../Assets/icons/usa-flage.png'
import arrowUpThin from '../../Assets/icons/arrow-up-thin-charcol.png';

const Haider = () => {
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
    const dynamicHeading = [0, 1, 2]
    useEffect(() => {
        const intervelId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicHeading.length)
        }, 5000)
        return () => clearInterval(intervelId);
    }, [])

    const handleTabMenu = () => {
      setIsTabMenuOpen(!isTabMenuOpen)
    }

    const navLinks = [
      {name: "Living Room", link: '/living-room', hasDropdown: true},
      {name: "Bedroom", link: '/bedroom', hasDropdown: true},
      {name: "Dining Room", link: '/dining-room', hasDropdown: true},
      {name: "Mattresses", link: '/mattresses', hasDropdown: true},
      {name: "Kids", link: '/kids', hasDropdown: true},
      {name: "Accent Furniture / Rugs", link: '/accent-furniture-and-rugs', hasDropdown: true},
      {name: "Small Spaces", link: '/small-spaces', hasDropdown: true},
      {name: "Outlets", link: '/outlets', hasDropdown: true},
      {name: "Labor Day Sale", link: '/tent-sale', hasDropdown: true},
      
  ]
  const [nearStorePopUp, setNearStorePopUp] = useState(false)
  const handleNearStorePopUp = () => {
    setNearStorePopUp(!nearStorePopUp)
  }

  const storeDetailsData = [
    {
        city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
        address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
        outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
            {day: 'Sunday', time: '06: 30 PM'},
            {day: 'Monday', time: '06: 30 PM'},
            {day: 'Tuesday', time: '06: 30 PM'},
            {day: 'Wednesday', time: '06: 30 PM'},
            {day: 'Thursday', time: '06: 30 PM'},
            {day: 'Friday', time: '06: 30 PM'},
            {day: 'Saturday', time: '06: 30 PM'},
        ],
        virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
    },
    {
      city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
      address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
      outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
          {day: 'Sunday', time: '06: 30 PM'},
          {day: 'Monday', time: '06: 30 PM'},
          {day: 'Tuesday', time: '06: 30 PM'},
          {day: 'Wednesday', time: '06: 30 PM'},
          {day: 'Thursday', time: '06: 30 PM'},
          {day: 'Friday', time: '06: 30 PM'},
          {day: 'Saturday', time: '06: 30 PM'},
      ],
      virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
  }
]

  const [changeLanguage, setChangeLanguage] = useState(false)
  const [currentLenIndex, setCurrentLenIndex] = useState(0)
  const [lanDrop, setLanDrop] = useState(false);
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState('');
  const [currentSelectedCountryFlag, setCurrentSelectedCountryFlag] = useState();
  const languagesData = [
    {lan: 'English', icon: usaFlag},
    {lan: 'French', icon: franceFlage},
    {lan: 'Portuguese', icon: protgalFlage}
  ]
  const handleLanguageModal = () => {
    setChangeLanguage(true)
  }
  const handleCLoseLanguageModal = () => {
    setChangeLanguage(false);
  }

  const handleActiveIndex = (index) => {
    setCurrentLenIndex(index)
    const selectedLanguage = languagesData[index];
    setCurrentSelectedCountry(selectedLanguage.lan);
    setCurrentSelectedCountryFlag(selectedLanguage.icon);
    setLanDrop(false);
  }

  const handleLanguageDropDown = () => {
    setLanDrop(!lanDrop);
  }

  // Location Modat script
  const [searchLocation, setSearchLocation] = useState(false);
  const handleSearchModal = () => {
    setSearchLocation(true)
  }
  const handleCloseSearch = () => {
    setSearchLocation(false)
  }

  return (
    <div className='haider-main-container'>
          
      {/* Banner Responsive */}
      <div className='furniture-mecca-promotional-banner'>
        <div className='rotating-message'>
          {currentIndex === 1 ? <span>Need help ordering? <Link className='toll-free-ancor' href='#'> Call 860-812-1111 </Link> </span> 
          : currentIndex === 2 ? <span>Learn about my <Link className='toll-free-ancor' href='#'>Financing Options</Link> </span> 
          : <span>Shop Furniture Mecca's everyday low prices!</span>}
        </div>
        <div className='header-links-and-select-language'>
          <div className='banner-link-container'>
            <Link>Stores</Link>
            <Link>Orders</Link>
            <Link>Financing</Link>
            <Link>Help</Link>
          </div>
          <div className='header-main-banner-language-div'>
            <button onClick={handleLanguageModal}>
              <img src={currentSelectedCountryFlag || usaFlag} alt='flag' />
              {currentSelectedCountry || 'English'}
            </button>
          </div>
        </div>
        <div className='on-tab-deliver-to'>
            <img src={deliverTo} alt="delivery" />
            <span> Deliver to : <Link> PA 19134</Link> </span>
            <img src={locationIcon} alt="location" className='promotion-banner-location' />
        </div>
      </div>

      <div className='header'>
        <div className='logo-container'>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className='search-bar-container'>
          <div className='search-bar-div'>
            <img src={searchIcon} alt="search icon" />
            <input type='search' placeholder='Search every thing' />
          </div>
        </div>
        <div className='nearby-address-container'>
          <div className='nearby-address-div'>
              <div className='icon-and-nearby-city'>
                <img src={NearStoreIcon} alt='near by' onClick={handleNearStorePopUp} />
                <NearStorePopUp isOpen={nearStorePopUp} setIsOpen={setNearStorePopUp} />
                <div className='near-by-city-time' onClick={handleNearStorePopUp}>
                  <p>Nearest Store</p>
                  <span>
                    <Link>E Venango - ST </Link><p> (Opens at 09:30 AM)</p>
                  </span>
                </div>
                <span className='deliver-to' onClick={handleSearchModal}>
                  <p>Deliver to</p>
                  <span>PA 19134</span>
                </span>
              </div>
          </div>
        </div>
        <div className='header-icons-container'>
          <Link>
          <img src={profileIcon} alt="profile" /> 
          </Link>
          <Link>
          <img src={HeartIcon} alt="heart" />
          </Link>
          <Link to={'/add-to-cart'}>
            <img src={cartIcon} alt="cart" />
          </Link>
        </div>
      </div>

      {/* Tablate Haider */}
      <div className='tab-view-header'>
        <div className='tab-view-header-containt'>
          <div className='header-view-toggle-and-profile-div'>
              <img src={navToggler} alt="togle button" onClick={handleTabMenu} className='tab-view-humburger-icon' />
              <img src={profileIcon} alt="profile" />
          </div>
          <div className='tab-view-logo-and-searchbar'>
            <Link to={'/'}><img src={logo} alt='logo' /></Link>
            <div className='tab-view-searchbar-container'>
              <input type='search' placeholder="Search all things Bob's" />
              <img src={searchRed} alt="search" />
            </div>
          </div>
          <div className='tab-view-card-and-location'>
                <img src={locationIcon} alt="location" />
                <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>

      {/* Mobile View Header */}
      <div className='mobile-view-header'>
        <div className='mobile-view-logo-and-icon'>
          <div className='toggle-and-profile-div'>
              <img src={navToggler} alt="togle button" onClick={handleTabMenu} />
              <img src={profileIcon} alt="profile" className='mobile-view-profile-icon' />
          </div>
          <div className='mobile-view-logo-div'>
              <Link to={'/'}><img src={logo} alt='logo' /></Link>
          </div>
          <div className='mobile-view-card-and-location'>
              <img src={profileIcon} alt="profile" className='mobile-view-card-location-profile' />
              <img src={locationIcon} alt="location" className='movile-view-location' />
              <img src={cartIcon} alt="cart" />
          </div>
        </div>
        <div className='movile-view-search-bar-div'>
          <div className='movile-view-search-bar'>
            <input type='search' placeholder="Search all things Bob's" />
            <img src={searchRed} alt="search" />
          </div>
        </div>
      </div>
            {isTabMenuOpen ? <TabMenu isNavbarVisible={isTabMenuOpen} setIsNavbarVisible={setIsTabMenuOpen} navLinks={navLinks} /> : <Nav navLinks={navLinks} />}
            
            {/* Language Modal */}
            <div className={`show-language-modal ${changeLanguage ? 'increase-width-language-modal' : ''} `}>
              <div className='language-modal-containt-div'>
                <button className={`close-language-modal ${changeLanguage ? '' : 'hide-close-btn' }`} onClick={handleCLoseLanguageModal}>
                  <img src={closeBtn} alt='close btn' />
                </button>
                <div className='select-language-container'>
                  <div className='modal-headin-div'>
                    <h3>Language</h3>
                  </div>
                  <div className='select-language-dropdown'>
                    <h3>Select Language:</h3>
                    <div className={`languages-drop-down ${lanDrop ? 'open-language-dropdown' : ''}`}>
                      <div className='selected-language' onClick={handleLanguageDropDown}>
                        <span>
                          <img src={currentSelectedCountryFlag || usaFlag} alt='usa' />
                          <h3>{currentSelectedCountry || 'English'}</h3>
                        </span>
                          <img src={arrowUpThin} alt='arrow' className={lanDrop ? 'select-lan-arrow-up' : 'select-lan-arrow-down'} />
                      </div>
                      <div className='defrent-languages'>
                        {languagesData.map((item, index) => (
                            <div className={currentLenIndex === index ? 'single-selected-language' : 'single-language' } onClick={() => handleActiveIndex(index)} >
                              <img src={item.icon} alt='icon' />
                              <h3>{item.lan}</h3>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>    
                <div className='select-language-modal-detail-section'>
                    <h3>Text Sample</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                      a type specimen book.
                    </p>
                </div>
              </div>
            </div>

            {/* Location Modal */}
            <div className={`show-location-modal ${searchLocation ? 'increase-width-location-modal' : ''} `}>
              <div className='location-modal-containt-div'>
                <button className={`close-language-modal ${searchLocation ? '' : 'hide-close-btn' }`} onClick={handleCloseSearch}>
                  <img src={closeBtn} alt='close btn' />
                </button>
                <div className='location-heading-and-search-bar-section'>
                  <div className='location-modal-heading-container'>
                    <span>
                      <img src={deliverTo} alt='delivery' />
                    </span>
                    <h3>Delivery Location</h3>
                  </div>
                  <div className='location-search-and-icon'>
                    <div className='location-searchand-button'>
                      <input type='text' className='location-search-input'/>
                      <button className='update-zip-btn'>Update Zip Code</button>
                    </div>
                    <div className='use-current-location'>
                      <img src={locationModalIcon} alt='location' />
                      <h3>Use Current Location</h3>
                    </div>
                  </div>
                </div>
                <div className='location-modal-detail-section'>
                  <h3>Why your zip code is important</h3>
                  <p>
                    You'll see only the products that deliver to your area, so you can shop for (and get) what you want!?
                  </p>
                </div>
              </div>
            </div>
    </div>
    
  )
}

export default Haider
