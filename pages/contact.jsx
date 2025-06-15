import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page 
      title="Contact Aje360" 
      description="Connect with Aje360 — Africa’s trusted engine for SME growth. We're here to support entrepreneurs with reliable tools that help scale their businesses."
    >
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;
  gap: 4rem;

  ${media('<=tablet')} {
    flex-direction: column;
    gap: 2rem;
  }
`;
