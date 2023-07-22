import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { CtfPricing } from './ctf-pricing';

import { useCtfPricingQuery } from '@src/components/features/ctf-components/ctf-pricing/__generated/ctf-pricing.generated';

interface CtfPricingGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
  previousComponent: string | null;
}

export const CtfPricingGql = (props: CtfPricingGqlPropsInterface) => {
  const { id, locale, preview, previousComponent } = props;

  const { isLoading, data } = useCtfPricingQuery({
    id,
    locale,
    preview,
  });

  const topicPricing = useContentfulLiveUpdates(data?.pricingTopic);

  if (isLoading || !topicPricing) {
    return null;
  }

  return <CtfPricing {...topicPricing} previousComponent={previousComponent} />;
};
