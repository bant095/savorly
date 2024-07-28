import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
// import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
// import menuIcon from '/menu-icon.png';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';
import { RiMenu4Line } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { IoBagCheckSharp } from 'react-icons/io5';
import { IoLogOut } from 'react-icons/io5';

import { menu_list } from '../../assets/assets';

const Navbar = ({ setShowLogin, category, setCategory }) => {
  const [menu, setMenu] = useState('home');
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  //logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/'); //logout
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // hide menu
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <div className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <Link to='/'>
        <h2 className='logo'>Savorly.</h2>
      </Link>
      <ul className={`navbar-menu ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
        <Link
          to='/'
          smooth={true}
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>

        <a
          href='#explore-menu'
          // onClick={() => setMenu('menu')}
          className={`navbar-profile ${menu === 'menu' ? 'active' : ''}`}
        >
          <p>Category</p>
          <ul className='navbar-profile-dropdown'>
            {menu_list.map((item, index) => {
              return (
                <div
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? 'All' : item.menu_name
                    )
                  }
                  key={index}
                  className='explore-menu-list-item'
                >
                  <p>{item.menu_name}</p>
                </div>
              );
            })}
          </ul>
        </a>

        <Link to='/about' className={menu === 'mobile-app' ? 'active' : ''}>
          About
        </Link>

        <Link
          to='/contact'
          // onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact
        </Link>
      </ul>

      <div className='navbar-right'>
        <CiSearch className='nav-icon' />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <FaShoppingCart className='nav-icon' />
          </Link>

          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className='btn'>
            Sign In
          </button>
        ) : (
          <div className='navbar-profile'>
            <FaUserCircle className='nav-icon' />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <IoBagCheckSharp className='nav-icon' />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <IoLogOut className='nav-icon' />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      <RiMenu4Line className='menu-icon nav-icon' onClick={toggleMenu} />
    </div>
  );
};

export default Navbar;
