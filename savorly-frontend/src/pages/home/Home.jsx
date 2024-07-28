import React, { useState } from 'react';
import './home.css';
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/explore-menu/ExploreMenu';
import FoodDisplay from '../../components/food-display/FoodDisplay';
import AppDownload from '../../components/app-download/AppDownload';
import Testimonials from '../../components/testimonials/Testimonials';
import ServiceUnique from '../../components/service-unique/ServiceUnique';
import Chef from '../../components/more-chef/Chef';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ServiceUnique />
      <Chef />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Testimonials />
      <AppDownload />
    </div>
  );
};

export default Home;
