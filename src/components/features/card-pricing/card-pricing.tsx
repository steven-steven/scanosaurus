import { Theme, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { PricingFieldsFragment } from '@src/components/features/ctf-components/ctf-pricing/__generated/ctf-pricing.generated';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderTop: '10px solid #fa9934',
    borderBottom: '10px solid #fa9934',
    padding: '0 10px',
    [theme.breakpoints.up('md')]: {
      padding: '0 50px',
    },

    '& p': {
      marginBottom: '0 !important',
      fontFamily: `${theme.typography.fontFamily} !important`,
      fontSize: '1.2rem !important',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.7rem !important',
      },
    },
    '& h1, h2, h3, h4, h5, h6': {
      marginBottom: '0 !important',
      marginTop: '0 !important',
      fontSize: '1.5rem !important',
      [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem !important',
      },
    },
  },
  addon: {
    borderColor: 'grey',
  },
  plan: {},
  price: {
    '& span': {
      fontSize: '4rem',
      color: '#fa9934',
      [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
      },
    },
  },
  details: {
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
      marginTop: '20px',
    },
  },
  cardContent: {
    padding: '5px',
    [theme.breakpoints.up('md')]: {
      padding: '16px',
    },
  },
  actions: {},
  contact: {
    border: '1px solid #b56005',
    textDecoration: 'none',
    margin: '0 auto',
    marginBottom: '1rem',
    borderRadius: '5px',
    color: '#b56005',
    fontWeight: '500',

    '&:hover': {
      backgroundColor: '#b56005',
      color: 'white',
    },

    padding: '4px 20px',
    fontSize: '1.3rem',
    [theme.breakpoints.up('md')]: {
      padding: '8px 40px',
      fontSize: '1.5rem',
    },
  },
}));

export const CardPricing = ({ plan, details, price }: PricingFieldsFragment) => {
  const classes = useStyles();
  const isAddon = plan == 'Addon: Delivery';

  return (
    <Card variant="outlined" className={`${classes.root} ${isAddon ? classes.addon : ''}`}>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1">{plan}</Typography>
        <Typography className={classes.price}>
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
