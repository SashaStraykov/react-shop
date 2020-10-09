import React, { useContext } from "react";
import { BackGroundGrey, H2, Container } from "./Styled";
import { PersonPageContext } from "../../Pages/PersonPage/context";
import ItemModal from "../ItemModal";

const PersonPageRejectedItems = () => {
  const { contextdataPersonPage } = useContext(PersonPageContext);
  const { unApprovedItems } = contextdataPersonPage;
  return (
    <BackGroundGrey>
      <Container>
        {unApprovedItems ? (
          <Container>
            <H2>
              Unapproved announcment <span>&#8595;</span>
            </H2>
            {unApprovedItems.map(({ id, ...rest }) => {
              return (
                <div key={id}>
                  <ItemModal id={id} {...rest} />
                </div>
              );
            })}
          </Container>
        ) : null}
      </Container>
    </BackGroundGrey>
  );
};

export default PersonPageRejectedItems;
