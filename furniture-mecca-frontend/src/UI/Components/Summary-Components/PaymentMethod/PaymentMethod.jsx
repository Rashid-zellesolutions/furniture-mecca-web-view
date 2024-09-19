import React from 'react'
import './PaymentMethod.css';
import paypalLogo from '../../../../Assets/Logo/paypal-logo.png';
import paypalFullLogo from '../../../../Assets/Logo/paypal-full-logo.png';
import acimoLogo from '../../../../Assets/Logo/acimo-logo.png'

const PaymentMethod = () => {
  return (
    <div className='payment-method-main-container'>
        <div className='payment-method-head-container'>
            <img src={paypalLogo} alt='logo' />
            <img src={paypalFullLogo} alt='full logo' />
            <p>As low as $377.89/month. <a href='#'>Learn more</a></p>    
        </div>
    </div>
  )
}

export default PaymentMethod
