import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMG } from './Styled';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = ({ img }) => (
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
  >
    {img.map((item) => <SwiperSlide key={item}><IMG src={item} /></SwiperSlide>)}

  </Swiper>
);

Slider.propTypes = {
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Slider;
