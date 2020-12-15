import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../layouts/header';
import BackGround from '../backGround';
import { HOME_PAGE } from '../../constants';
import './wrapper.css';

const Wrapper = ({ children, link = HOME_PAGE, header = true }) => (
  <IonPage>
    {header && <Header linkTo={link} />}
    <IonContent id="contentId">
      <BackGround>
        {children}
        {/* <div className="scrollTopButton" onClick={() => scrollToTop()}>Click ON ME</div> */}
      </BackGround>
    </IonContent>
  </IonPage>
);
Wrapper.defaultProps = {
  link: HOME_PAGE,
  header: true,
};
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  header: PropTypes.bool,
};

export default Wrapper;

// const scrollToTop = () => {
//   document.getElementById('contentId').scrollToTop(500);
//   console.log(document.getElementById('contentId').clientHeight);
//   console.log(document.getElementById('contentId').scrollTop);
// };
