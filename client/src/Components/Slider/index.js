import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMG } from './Styled';
import 'swiper/swiper-bundle.css';
import emptyPhoto from '../../assets/images/emptyPhoto.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = ({ img }) => (
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
  >
    {img.length > 0 ? img.map((item) => <SwiperSlide key={item}><IMG src={item} /></SwiperSlide>) : <SwiperSlide key={img.length}><IMG src={emptyPhoto} /></SwiperSlide>}

  </Swiper>
);

Slider.propTypes = {
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Slider;
