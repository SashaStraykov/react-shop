import React, { useContext } from 'react';
import { BackGroundGrey, H2, Container } from './Styled';
import { PersonPageContext } from '../../context';
import ItemModal from '../../../../Components/ItemModal';

const PersonPageRejectedItems = () => {
  const { contextdataPersonPage } = useContext(PersonPageContext);
  const { unApprovedItems } = contextdataPersonPage;
  return (
    <BackGroundGrey>
      <Container>
        {unApprovedItems && (
          <Container>
            <H2>
              Unapproved announcment
              {' '}
              <span>&#8595;</span>
            </H2>
            {unApprovedItems.map(({ id, ...rest }) => (
              <div key={id}>
                <ItemModal id={id} {...rest} />
              </div>
            ))}
          </Container>
        )}
      </Container>
    </BackGroundGrey>
  );
};

export default PersonPageRejectedItems;
