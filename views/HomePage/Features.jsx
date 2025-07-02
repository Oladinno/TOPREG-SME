import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Smart Invoicing',
    description:
      'Create professional invoices quickly and track customer payments with ease. Get paid faster and stay organized.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Inventory Management',
    description:
      'Keep real-time track of your products. Know what’s in stock, get alerts, and manage inventory efficiently.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Sales Tracking',
    description:
      'Monitor daily sales activity across all channels. Understand what’s working and scale your efforts wisely.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Business Management',
    description:
      'Easily manage customer details, history, and communication — build trust and repeat business.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
