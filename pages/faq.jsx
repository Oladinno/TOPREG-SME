// pages/faq.js

import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection'; // Assuming this component contains your FAQ content
import { media } from 'utils/media'; // Assuming media utility is available

export default function FaqPage() {
  return (
    <Page
      title="Frequently Asked Questions" // Updated title for the FAQ page
      description="Find answers to common questions about Aje360, our tools, pricing, and how we empower African entrepreneurs." // Updated description for the FAQ page
    >
      <Wrapper>
        {/* The FaqSection component will render your list of FAQs */}
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  /* This wrapper provides spacing. Adjust as needed based on your FaqSection's internal padding. */
  & > :last-child {
    margin-bottom: 15rem; /* Ensures space at the bottom of the page */
  }

  /* You might want to add a top margin to the FaqSection if it doesn't have one */
  & > *:first-child {
    margin-top: 5rem; /* Example: Add some space below the page title/description */
    ${media('<=tablet')} {
      margin-top: 3rem;
    }
  }
`;