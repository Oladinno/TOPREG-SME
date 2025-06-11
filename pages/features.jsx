import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Smart Invoicing',
    description:
      'Create professional invoices in seconds, track payments, and get paid faster — with zero stress.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Inventory Management',
    description:
      'Know what’s in stock at all times. Monitor products, receive alerts, and stay organized effortlessly.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Sales Tracking',
    description:
      'Track sales across all channels in real-time. Understand what’s selling, when, and to whom.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Customer Management',
    description:
      'Manage customer details, interactions, and insights — build stronger, lasting business relationships.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Data-Driven Insights',
    description:
      'Make better business decisions with clear dashboards and analytics built for entrepreneurs.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Mobile-Friendly Access',
    description:
      'Run your business on-the-go. Aje360 works smoothly on mobile, helping you stay connected anytime, anywhere.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Secure Cloud Backup',
    description:
      'Your business data is safe and automatically backed up in the cloud — no worries, no losses.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Local Language Support',
    description:
      'Built with African entrepreneurs in mind. Use Aje360 in English, Pidgin, Yoruba, Hausa, and more (coming soon).',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Affordable & Scalable',
    description:
      'From solo vendors to growing startups — Aje360 adapts to your needs without breaking the bank.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Explore the powerful tools Aje360 offers to help African businesses thrive.">
      <Wrapper>
        <SectionTitle>Explore What Aje360 Can Do For You</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
