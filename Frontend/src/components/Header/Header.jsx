import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import "./Header.css"

const Header = () => {
  return (
    <div class="header flex gap-20 p-7 items-center justify-center">
      <div className='container'>
        <NavLink to="/"
          onClick={(isActive) => (isActive ? ".active" : "")}
        ><img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="" />
        </NavLink>
        <nav>
          <ul className='flex gap-20 uppercase'>
            <li>
              <NavLink to="/home"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/team"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/skill"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Skill
              </NavLink>
            </li>
            <li>
              <NavLink to="/clients"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Clients
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact"
                onClick={(isActive) => (isActive ? ".active" : "")}
              >Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        return (
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </>
        );
      </div>
    </div>
  )
}

export default Header