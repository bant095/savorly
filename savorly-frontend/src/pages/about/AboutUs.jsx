import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className='about-container '>
      <div className='about-info'>
        <h2>About Us</h2>
      </div>
      {/*  */}
      <div className='about-content'>
        <div className='about-text'>
          <h3>Our Story</h3>
          <p>
            Savorly was born from a passion for food and a desire to connect
            people with exceptional culinary experiences. Founded in 2024, we
            started as a small local kitchen with a dream of sharing our love
            for delicious, home-cooked meals with the community. Our journey
            began with a simple menu, a handful of dedicated chefs, and a
            commitment to using only the freshest, highest quality ingredients.
          </p>
        </div>

        <div className='about-text'>
          <h3>Our Mission</h3>
          <p>
            Today, Savorly has grown into a vibrant online platform that brings
            together talented chefs and food enthusiasts from all walks of life.
            Our mission remains the same: to provide a platform where culinary
            creativity flourishes, where chefs can share their passion and
            expertise, and where customers can discover new flavors and savor
            unforgettable meals.
          </p>
          <p>
            We believe that food is more than just sustenance – it's a way to
            connect, celebrate, and explore. We strive to create a community
            where everyone feels welcome, where diversity is celebrated, and
            where the love for food brings people together.
          </p>
          <p>
            At Savorly, we're committed to supporting our chefs by providing
            them with the tools, resources, and platform they need to succeed.
            We empower them to showcase their culinary talents, reach a wider
            audience, and build thriving businesses around their passion for
            food.
          </p>
          <p>
            For our customers, we offer a curated selection of diverse and
            delicious meals, prepared with love and care. We source our
            ingredients from local farmers and suppliers, ensuring that every
            dish is fresh, flavorful, and made with the highest quality
            standards.
          </p>
          <p>
            Whether you're a seasoned chef or a food enthusiast looking to
            discover new culinary delights, Savorly is your place to be. Join us
            on this flavorful journey and experience the joy of food, one bite
            at a time.
          </p>
          <p>
            We invite you to explore our menu, meet our talented chefs, and join
            our growing community. We're excited to have you be a part of the
            Savorly experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
