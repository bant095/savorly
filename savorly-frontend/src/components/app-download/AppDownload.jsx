import React from 'react';
import { assets } from '../../assets/assets';
import './appdownload.css';

import foodPhone from '/delivery_phone.jpg';

const AppDownload = () => {
  return (
    <div className='app-container'>
      <div className='app-download' id='app-download'>
        <p>
          For Better Experience Download <span>Savorly App</span>
        </p>
        <div className='app-download-platforms'>
          <img src={assets.play_store} alt='' />
          <img src={assets.app_store} alt='' />
        </div>
      </div>

      {/*  */}
      <div className='phone-pix'>
        <img src={foodPhone} alt='' />
      </div>
    </div>
  );
};

export default AppDownload;
