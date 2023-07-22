import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type PricingFieldsFragment = { __typename: 'PricingTopic', plan?: string | null, details?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string } };

export type CtfPricingQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfPricingQuery = { __typename?: 'Query', pricingTopic?: (
    { __typename?: 'PricingTopic' }
    & PricingFieldsFragment
  ) | null };

export const PricingFieldsFragmentDoc = `
    fragment PricingFields on PricingTopic {
  __typename
  sys {
    id
  }
  plan
  details
  price
}
    `;
export const CtfPricingDocument = `
    query CtfPricing($id: String!, $locale: String, $preview: Boolean) {
  pricingTopic(id: $id, preview: $preview, locale: $locale) {
    ...PricingFields
  }
}
    ${PricingFieldsFragmentDoc}`;
export const useCtfPricingQuery = <
      TData = CtfPricingQuery,
      TError = unknown
    >(
      variables: CtfPricingQueryVariables,
      options?: UseQueryOptions<CtfPricingQuery, TError, TData>
    ) =>
    useQuery<CtfPricingQuery, TError, TData>(
      ['CtfPricing', variables],
      customFetcher<CtfPricingQuery, CtfPricingQueryVariables>(CtfPricingDocument, variables),
      options
    );

useCtfPricingQuery.getKey = (variables: CtfPricingQueryVariables) => ['CtfPricing', variables];
;

useCtfPricingQuery.fetcher = (variables: CtfPricingQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPricingQuery, CtfPricingQueryVariables>(CtfPricingDocument, variables, options);