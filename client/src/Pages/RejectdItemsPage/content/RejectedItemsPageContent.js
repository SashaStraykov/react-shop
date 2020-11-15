import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {
  BackGroundGrey, H2, Container, Wrapper, CancelButton
} from './styled';
import { RejectedItemsPageContext } from '../context';
import ItemModal from '../../../Components/ItemModal';
import Spinner from '../../../Components/Spinner'
import ErrorModal from '../../../Components/ErrorModal'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  bar: {
    width: '90%',
    height: '3em'
  },
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

  const { rejectedItemsContextData } = useContext(RejectedItemsPageContext);
  const { rejectedItems, loading, error } = rejectedItemsContextData;
  if(loading) {
    return <Spinner/>
  }
  if(error) {
    return <ErrorModal/>
  }
  return (
    <BackGroundGrey>
      <H2>
        Unapproved announcment
        <span>&#8595;</span>
      </H2>
        {rejectedItems && (
          <Container>
            {rejectedItems.map(({ id, ...rest }) => (
              <Wrapper key={id}>
                <Accordion className={classes.bar}>
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
                <CancelButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </CancelButton>
              </Wrapper>
            ))}
          </Container>
        )}
    </BackGroundGrey>
  );
};

export default PersonPageRejectedItems;
