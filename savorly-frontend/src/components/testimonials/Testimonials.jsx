import React, { useRef } from 'react';
import './testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img
        src={back_icon}
        alt=''
        className='back-btn'
        onClick={slideBackward}
      />

      <div className='slider'>
        <ul ref={slider}>
          {/* user 1 */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' />
                <div>
                  <h3>Emily Davis</h3>
                  <span>Teacher</span>
                </div>
              </div>
              <p>
                Savorly Foods is my go-to for weeknight dinners! As a busy
                teacher, I don't have much time to cook, but their fresh
                ingredients and flavorful meals make it easy to eat healthy and
                delicious food. I especially love their veggie stir-fry and the
                lentil soup – perfect for a cozy night in.
              </p>
            </div>
          </li>

          {/* user 2 */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='' />
                <div>
                  <h3>David Rodriguez</h3>
                  <span>Software Engineer</span>
                </div>
              </div>
              <p>
                I order Savorly Foods for lunch at the office almost every day.
                Their menu is always changing, so I never get bored. The
                portions are generous, and the food is always delivered on time
                and still warm. I'm a big fan of their spicy chicken wrap and
                the quinoa salad.
              </p>
            </div>
          </li>

          {/* user 3 */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='' />
                <div>
                  <h3>Sarah Chen</h3>
                  <span>Nutritionist</span>
                </div>
              </div>
              <p>
                I recommend Savorly Foods to my clients who are looking for
                nutritious and balanced meals. Their focus on whole foods and
                minimal processing aligns with my philosophy of healthy eating.
                The variety of options ensures everyone can find something they
                enjoy, whether they're vegetarian, vegan, or have dietary
                restrictions.
              </p>
            </div>
          </li>

          {/* user 4 */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='' />
                <div>
                  <h3>Michael Turner</h3>
                  <span> Personal Trainer</span>
                </div>
              </div>
              <p>
                Savorly Foods has been a game-changer for my clients who want to
                fuel their workouts with nutritious meals. Their high-protein
                options are perfect for muscle recovery, and the fact that they
                taste amazing is a huge bonus. My clients love the grilled
                salmon with roasted vegetables and the turkey chili.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
