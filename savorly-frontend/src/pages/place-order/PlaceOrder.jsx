import React, { useContext, useEffect, useState } from 'react';
import './placeorder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    // so it will not reload the page
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    //SET API
    let response = await axios.post(url + '/api/order/place', orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      // to send users on the session_url
      window.location.replace(session_url);
    } else {
      alert('Error');
    }
  };

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='placeorder-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            name='firstName'
            onChange={onChangeHandler}
            value={data.firstName}
            type='text'
            placeholder='First Name'
            required
          />
          <input
            name='lastName'
            onChange={onChangeHandler}
            value={data.lastName}
            type='text'
            placeholder='Last Name'
            required
          />
        </div>

        <input
          name='email'
          onChange={onChangeHandler}
          value={data.email}
          type='email'
          placeholder='Email Address'
          required
        />
        <input
          name='street'
          onChange={onChangeHandler}
          value={data.street}
          type='text'
          placeholder='Street'
          required
        />

        <div className='multi-fields'>
          <input
            name='city'
            onChange={onChangeHandler}
            value={data.city}
            type='text'
            placeholder='City'
            required
          />
          <input
            name='state'
            onChange={onChangeHandler}
            value={data.state}
            type='text'
            placeholder='State'
            required
          />
        </div>
        <div className='multi-fields'>
          <input
            name='zipcode'
            onChange={onChangeHandler}
            value={data.zipcode}
            type='text'
            placeholder='Zip Code'
            required
          />
          <input
            name='country'
            onChange={onChangeHandler}
            value={data.country}
            type='text'
            placeholder='Country'
            required
          />
        </div>
        <input
          name='phone'
          onChange={onChangeHandler}
          value={data.phone}
          type='text'
          placeholder='Phone Number'
          required
        />
      </div>

      {/* Right form  */}
      <div className='placeorder-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;