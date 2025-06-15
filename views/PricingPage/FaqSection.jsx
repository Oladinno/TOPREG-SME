import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What is Aje360 and how does it help my business?">
        Aje360 is dedicated to empowering African SMEs with innovative, reliable, and relevant software tools. We help businesses like yours to scale by simplifying critical operations such as invoicing, financial management, and corporate compliance (CAC services), enabling you to operate with clarity, confidence, and control.
      </Accordion>

      <Accordion title="What is Ajé Invoicer and how can it benefit me?">
        Ajé Invoicer is a powerful mobile application that allows you to create, manage, and track professional invoices in just three easy steps. It helps you get paid faster, maintain organized financial records, and present a professional image to your clients, all from your smartphone.
      </Accordion>

      <Accordion title="What is CompanyBuddy and how does it simplify CAC services?">
        CompanyBuddy is your personal guide to all things corporate compliance in Nigeria. It's a mobile app that puts Corporate Affairs Commission (CAC) services at your fingertips, allowing you to easily navigate CAC registration, SCUML registration, and even chat directly with an agent for personalized support. It simplifies complex processes, saving you time and effort.
      </Accordion>

      <Accordion title="Is Aje360 suitable for small businesses and startups?">
        Absolutely! Our tools are designed for all entrepreneurs, from roadside vendors to growing startups. We focus on providing simple but powerful software solutions that are accessible and easy to use, regardless of your business size or technical expertise. Our goal is to ensure no business is left behind.
      </Accordion>

      <Accordion title="How secure is my business data with Aje360?">
        At Aje360, data security is paramount. We employ robust security measures and encryption protocols to protect your sensitive business information, including your financial records and personal data. We are committed to maintaining the highest standards of data privacy and integrity.
      </Accordion>

      <Accordion title="How do I get started with Ajé Invoicer or CompanyBuddy?">
        Getting started is simple! You can download the Ajé Invoicer or CompanyBuddy app from your respective app store. Follow the on-screen instructions to set up your profile and begin using the features. For any assistance, our support team is readily available through the app or our website.
      </Accordion>

      <Accordion title="What kind of support can I expect from Aje360?">
        We are committed to your success. Our support channels include in-app chat with agents (especially for CompanyBuddy), comprehensive FAQs, and dedicated customer service. We're here to help you every step of the way, ensuring you get the most out of our tools.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
