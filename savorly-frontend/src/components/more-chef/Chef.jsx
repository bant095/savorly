import React from 'react';
import './chef.css';

const Chef = () => {
  return (
    <div className='chef-container'>
      <div className=' chef-text'>
        <h3>
          <span>Passionate About Cooking?</span> Share Your Culinary Talent!
        </h3>
        <p>
          Calling all chefs! Share your culinary passion on Savorly. Join our
          community, reach more customers, and turn your love of cooking into a
          rewarding career. We provide the tools for your success.
        </p>
        <button>Become a Savorly Chef Today!</button>
      </div>
      <div className='chef-circle'>
        <h3>
          Cook. <br /> Share. <br /> Thrive.
        </h3>
      </div>
    </div>
  );
};

export default Chef;
