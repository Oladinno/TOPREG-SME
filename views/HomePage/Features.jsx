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
    title: 'Customer Management',
    description:
      'Easily manage customer details, history, and communication — build trust and repeat business.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Business Insights',
    description:
      'Turn data into decisions. View clear reports and analytics that help you grow confidently and strategically.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Mobile First',
    description:
      'Access your business tools on any device. Aje360 is built to work wherever you are — office, market, or on-the-go.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Cloud Security',
    description:
      'Your business data is backed up and secure in the cloud. Access it safely from anywhere, anytime.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Local Language Support',
    description:
      'Run your business in your preferred language — English, Pidgin, Yoruba, Hausa, and more (coming soon).',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Affordable & Flexible',
    description:
      'Whether you’re just starting out or scaling up, Aje360 offers affordable plans that grow with you.',
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
