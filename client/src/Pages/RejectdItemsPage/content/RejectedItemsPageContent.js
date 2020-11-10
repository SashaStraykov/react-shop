import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {
  BackGroundGrey, H2, Container, Wrapper,
} from './styled';
import { PersonPageContext } from '../../PersonPage/context';
import ItemModal from '../../../Components/ItemModal';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: '35%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'var( --red-color)',
  },
  secondaryHeadingNormal: {
    fontSize: theme.typography.pxToRem(15),
    color: 'var(--icon-color)',
  },
}));

const PersonPageRejectedItems = () => {
  const classes = useStyles();

  const { contextdataPersonPage } = useContext(PersonPageContext);
  const { unApprovedItems } = contextdataPersonPage;
  return (
    <BackGroundGrey>
      <Container>
        {unApprovedItems && (
          <Container>
            <H2>
              Unapproved announcment
              <span>&#8595;</span>
            </H2>
            {unApprovedItems.map(({ id, ...rest }) => (
              <Wrapper key={id}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{rest.title}</Typography>
                    <Typography className={rest.approved === '' ? classes.secondaryHeadingNormal : classes.secondaryHeading}>{rest.approved === '' ? 'Submitted' : 'Declined'}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>

                    <ItemModal id={id} {...rest} />

                  </AccordionDetails>
                </Accordion>

              </Wrapper>
            ))}
          </Container>
        )}
      </Container>
    </BackGroundGrey>
  );
};

export default PersonPageRejectedItems;
