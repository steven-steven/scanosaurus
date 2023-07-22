import { Theme, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { PricingFieldsFragment } from './__generated/ctf-pricing.generated';

import { CardPricing } from '@src/components/features/card-pricing';
import { useLayoutContext } from '@src/layout-context';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    height: '340px',
  },
  inline: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '50%',
  },
  wideCard: {
    width: '100%',
    marginTop: '20px',
  },
}));

interface CtfPricingPropsInterface extends PricingFieldsFragment {
  previousComponent: string | null;
}

export const CtfPricing = (props: CtfPricingPropsInterface) => {
  const layout = useLayoutContext();
  const classes = useStyles();

  const isAddon = props.plan == 'Addon: Delivery';

  return (
    <Container maxWidth={false} className={`${classes.inline} ${isAddon ? classes.wideCard : ''}`}>
      <div className={classes.root} style={{ maxWidth: layout.containerWidth }}>
        <CardPricing {...props} />
      </div>
    </Container>
  );
};
