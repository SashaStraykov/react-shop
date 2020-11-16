import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemBox, Img, TitleBox, Boxdate, BoxPrice, InfoBox,
  InfoBoxBottom, DescriptionBox
} from './styled';
import emptyPhoto from '../../assets/images/emptyPhoto.jpg';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    marginRight: '0.2em'
  },
});

const ProductsCategoryItem = ({
  title, price, date, img, description
}) => {
  const classes = useStyles();
  return (
    <ItemBox>
      <Img src={img.length > 0 ? `${process.env.REACT_APP_API_SERVER_PORT}${img[0]}` : emptyPhoto} alt={img.length > 0 ? img[0] : emptyPhoto} />
      <InfoBox>
        <TitleBox>{title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}</TitleBox>
        <DescriptionBox>
          {description}
        </DescriptionBox>
        <InfoBoxBottom>
          <Boxdate>
            <DateRangeIcon className={classes.icon}/>
            {date}
          </Boxdate>
          <BoxPrice>
            <MonetizationOnIcon className={classes.icon}/>
            {price}
            {' '}
            typs
          </BoxPrice>
        </InfoBoxBottom>
      </InfoBox>
    </ItemBox>
  );
}

ProductsCategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,

};

export default ProductsCategoryItem;
