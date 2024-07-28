import React from 'react';
import './header.css';
import { Carousel } from 'antd';
// import { assets } from '../../assets/assets';
import headerImg2 from '/hero-food-background.jpg';
import video1 from '/video1.mp4';
import video3 from '/video3.mp4';
import video2 from '/video2.mp4';
import video4 from '/video4.mp4';

// const contentStyle = {
//   height: '34vw',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Header = () => {
  return (
    <Carousel autoplay>
      {/* 1 */}
      <div>
        <div className='header'>
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
              zIndex: -1, // Place the video behind the content
            }}
          >
            <source src={video4} type='video/mp4' />
          </video>

          <div className='header-contents'>
            {/* Apply contentStyle here */}
            <h2>Get Your Cravings Delivered Fast</h2>
            <p>
              Enjoy restaurant-quality meals without leaving your home. Order
              online for quick and convenient delivery or pickup
            </p>
            <button>Order Now</button>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div>
        <div className='header'>
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
              zIndex: -1, // Place the video behind the content
            }}
          >
            <source src={video3} type='video/mp4' />
          </video>

          <div className='header-contents'>
            {/* Apply contentStyle here */}
            <h2>Don't Miss Our Weekly Specials</h2>
            <p>
              Discover new and exciting flavors every week with our rotating
              menu of chef-inspired creations. Available for a limited time
              only.
            </p>
            <button>View Menu</button>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div>
        <div className='header'>
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
              zIndex: -1, // Place the video behind the content
            }}
          >
            <source src={video1} type='video/mp4' />
          </video>

          <div className='header-contents'>
            {/* Apply contentStyle here */}
            <h2>Nourish Your Body, Delight Your Senses</h2>
            <p>
              Indulge in guilt-free pleasures with our wholesome, flavorful
              dishes crafted from fresh, seasonal ingredients. Your well-being
              is our priority
            </p>
            <button>View Our Nutritious Menu</button>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div>
        <div className='header'>
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
              zIndex: -1,
            }}
          >
            <source src={video2} type='video/mp4' />
          </video>

          <div className='header-contents'>
            {/* Apply contentStyle here */}
            <h2>Where Every Meal is a Celebration</h2>
            <p>
              Gather with friends and family to create unforgettable memories
              around the table. Our warm and inviting atmosphere is perfect for
              any occasion.
            </p>
            <button>Book Your Celebration Now</button>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div>
        <div
          style={{
            backgroundImage: `url(${headerImg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
          }}
          className='header'
        >
          <div className='header-contents'>
            <h2>Order your favorite food here</h2>
            <p>
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time.
            </p>
            <button>View Menu</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Header;
