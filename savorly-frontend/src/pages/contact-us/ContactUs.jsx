import React, { useState } from 'react';
import './contactus.css';
import { RiHomeOfficeFill } from 'react-icons/ri';
import { IoMdCall } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { TbWorldWww } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircleLoader } from 'react-spinners';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData(event.target);
      formDataToSend.append(
        'access_key',
        '0f9d1f61-d70d-448c-a363-39c1a7e01c05'
      );

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message submitted successfully!', { autoClose: 3000 }); // Success toast
        event.target.reset();
      } else {
        toast.error('Error submitting message. Please try again.', {
          autoClose: 3000,
        }); // Error toast
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred. Please try again later.', {
        autoClose: 3000,
      }); // Error toast
    } finally {
      setIsLoading(false);
    }

    // if (data.success) {
    //   setFormData({
    //     // Reset the state after successful submission
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    //   });
    // }
  };

  return (
    <div className='contact-container'>
      {/* contact header */}
      <div className='contact-info'>
        <h2>Contact Information</h2>
      </div>
      {/* contact info */}
      <div className='contact-information'>
        <div className='contact-address'>
          <h3>Contact Information</h3>

          <div className='contact-contain'>
            {/* icon */}
            <RiHomeOfficeFill className='contact-icon' />
            <div className='contact-text-add'>
              <h5>Office Adress:</h5>
              <p>2003 Monroe Street Houston, TX 77002. United State.</p>
            </div>
          </div>

          {/* 2 */}

          <div className='contact-contain'>
            {/* icon */}
            <IoMdCall className='contact-icon' />
            <div className='contact-text-add'>
              <h5>Phone Number:</h5>
              <p>+1 713-366-3123, +1 270-832-5194</p>
            </div>
          </div>

          {/* 3 */}

          <div className='contact-contain'>
            {/* icon */}
            <IoMdMail className='contact-icon' />
            <div className='contact-text-add'>
              <h5>Email Adress:</h5>
              <p>contact@savorly.com</p>
            </div>
          </div>

          {/* 4 */}

          <div className='contact-contain'>
            {/* icon */}
            <TbWorldWww className='contact-icon' />
            <div className='contact-text-add'>
              <h5>Website Adress:</h5>
              <p>www.savorly-foods.onrender.com</p>
            </div>
          </div>
        </div>

        {/* ================== */}
        {/* FORM CONTACT */}
        <div className='contact-col'>
          <h3>Send Us A Message</h3>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type='text'
              name='subject'
              placeholder='Your Subject'
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name='message'
              rows='6'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type='submit' disabled={isLoading}>
              <p>Submit Message</p>
              {isLoading && (
                <CircleLoader size={20} color='#fff' className='loader' />
              )}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>

      {/* map */}
      <div className='contact-map'>
        <iframe
          title='Savorly Foods Map' // Add a title for accessibility
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1696848.6830547892!2d-118.2879006!3d33.8340465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1722187381263!5m2!1sen!2sus'
          width='100%' // Make it responsive
          height='750' // Adjust height as needed
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          aria-hidden='false' // Add for screen readers
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
