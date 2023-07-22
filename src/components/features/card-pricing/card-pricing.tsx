import { Theme, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { PricingFieldsFragment } from '@src/components/features/ctf-components/ctf-pricing/__generated/ctf-pricing.generated';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderTop: '10px solid #fa9934',
    borderBottom: '10px solid #fa9934',
    padding: '0 50px',

    '& p': {
      marginBottom: '0 !important',
      fontFamily: `${theme.typography.fontFamily} !important`,
      fontSize: '1.7rem !important',
    },
    '& h1, h2, h3, h4, h5, h6': {
      marginBottom: '0 !important',
      marginTop: '0 !important',
    },
  },
  addon: {
    borderColor: 'grey',
  },
  plan: {
    fontSize: '1.8rem',
    lineHeight: 1.333,
  },
  price: {
    fontSize: '2rem',
    '& span': {
      fontSize: '4rem',
      color: '#fa9934',
    },
  },
  details: {
    marginTop: '20px',
  },
  actions: {},
  contact: {
    border: '1px solid #b56005',
    textDecoration: 'none',
    padding: '8px 40px',
    margin: '0 auto',
    borderRadius: '5px',
    color: '#b56005',
    fontWeight: '500',

    '&:hover': {
      backgroundColor: '#b56005',
      color: 'white',
    },
  },
}));

export const CardPricing = ({ plan, details, price }: PricingFieldsFragment) => {
  const classes = useStyles();
  const isAddon = plan == 'Addon: Delivery';

  return (
    <Card variant="outlined" className={`${classes.root} ${isAddon ? classes.addon : ''}`}>
      <CardContent>
        <Typography variant="subtitle1">{plan}</Typography>
        <Typography variant="subtitle1" className={classes.price}>
          {isAddon ? (
            <>
              <sup>$</sup>
              <span>{price}</span>
            </>
          ) : (
            <>
              <span>{price}</span>¢ per page
            </>
          )}
        </Typography>
        <Typography className={classes.details}>{details}</Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <a className={classes.contact} href="#contacts">
          Contact Us
        </a>
      </CardActions>
    </Card>
  );
};
