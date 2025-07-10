import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'LEGAL & BUSINESS SETUP',
    description:[
       '• Business Registration (CAC)',
    <br key="br1" />, // Key is important for React lists
    '• Trademark & IP Protection',
    <br key="br2" />, // Key is important for React lists
    '• SCUML Certificate Support',
    <br key="br3" />, // Key is important for React lists
    '• Compliance Advisory & Filing',
  ]
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'BUSINESS TOOLS',
    description:[
       '• Aje Invoicer - Create branded invoices, receipts, and track payments',
    <br key="br1" />, // Key is important for React lists
    '• CompanyBuddy - CAC reminders & secure document storage',
    <br key="br2" />, // Key is important for React lists
    '• HR Essentials Toolkit - Hiring templates, employment contracts & staff policies',
    <br key="br3" />, // Key is important for React lists
    '•  ⁠Company Policy structuring',
  ]
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'GROWTH & SCALE SUPPORT',
    description:[
       '•  Business Structure Audits',
    <br key="br1" />, // Key is important for React lists
    '• Strategy & Expansion Guidance',
    <br key="br2" />, // Key is important for React lists
    '• Funding/Grant Readiness Support',
    <br key="br3" />, // Key is important for React lists
    '• SME Coaching & Advisory',
    <br key="br4" />,
    '• Financial Analytics (vie Aje Invoicer Al)',
  ]
 },
  /*{
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Business Management',
    description:
      'Easily manage customer details, history, and communication — build trust and repeat business.',
  }, */
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
