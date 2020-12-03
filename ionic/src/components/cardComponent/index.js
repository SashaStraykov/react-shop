import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import {
  calendarOutline, logoUsd, trashOutline,
} from 'ionicons/icons';
import PropTypes from 'prop-types';
import './CardComponent.css';
import Slider from '../slider';

const CardComponent = ({
  id, description, img, price, remark, title,
  date, approved, onDeleteButtonCard = null, consideration = false,
}) => (
  <IonCard>
    <Slider img={img} />
    <IonCardHeader>
      {consideration
      && (
      <>
        <div onClick={() => onDeleteButtonCard(id, title)} className="cardDelIcon">
          <IonIcon icon={trashOutline} />
        </div>
        <IonCardSubtitle className={approved === '' ? null : 'cardHeaderD'}>{approved === '' ? 'Submitted' : 'Declined'}</IonCardSubtitle>
      </>
      )}
      <IonCardTitle>{title}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent className="cardDescription">{description}</IonCardContent>
    <IonCardContent className="cardC">
      <IonGrid>
        <IonRow className="cardContent">
          <IonCol className="cardColF">
            <IonIcon icon={logoUsd} className="cardIcon" />
            <IonLabel>{price}</IonLabel>
          </IonCol>
          <IonCol className="cardColS">
            <IonIcon icon={calendarOutline} className="cardIcon" />
            <IonLabel>{date}</IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
      {remark && <IonCardContent className="test">{remark}</IonCardContent>}
    </IonCardContent>
  </IonCard>
);

CardComponent.defaultProps = {
  onDeleteButtonCard: null,
  consideration: false,
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired,
  approved: PropTypes.string.isRequired,
  onDeleteButtonCard: PropTypes.func,
  consideration: PropTypes.bool,
};

export default CardComponent;
