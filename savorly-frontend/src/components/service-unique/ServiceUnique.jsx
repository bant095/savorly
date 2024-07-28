import React from 'react';
import './serviceunique.css';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsAlarmFill } from 'react-icons/bs';

const ServiceUnique = () => {
  return (
    <div className='service-uniqueness'>
      <div className='service-unique'>
        {/* icon */}
        <TbTruckDelivery className='service-icon' />
        <div className='service-text'>
          <h4>FREE DELIVERY & RETURN</h4>
          <p>Free shipping on all orders over $150.</p>
        </div>
        <div className='line'></div>
      </div>
      <div className='service-unique'>
        {/* icon */}
        <RiMoneyDollarCircleLine className='service-icon' />
        <div className='service-text'>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>100% money back guarantee.</p>
        </div>
        <div className='line'></div>
      </div>
      <div className='service-unique'>
        {/* icon */}
        <BsAlarmFill className='service-icon' />
        <div className='service-text'>
          <h4>ONLINE SUPPORT 24/7</h4>
          <p>Help available day and night.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceUnique;
