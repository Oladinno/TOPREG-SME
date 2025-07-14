// pages/help-center.js

import styled from 'styled-components';
import Page from 'components/Page'; // Assuming this is your page wrapper component
import SectionTitle from 'components/SectionTitle'; // Assuming this is your section title component
import FaqSection from 'views/PricingPage/FaqSection'; // Reusing the FAQ component you've already created
import Container from 'components/Container'; // Assuming you have a general container component
import { media } from 'utils/media'; // Assuming your media query utility

export default function HelpCenterPage() {
  return (
    <Page
      title="Top Reg SME Help Center" // Specific title for the help center
      description="Find answers to your questions, connect with our support team, and access valuable resources for using Aje360."
    >
      <Wrapper>
        {/* Section 1: Frequently Asked Questions */}
        <FaqSectionWrapper>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          {/* Reusing your existing FaqSection component, which contains the Q&A logic and content */}
          <FaqSection />
        </FaqSectionWrapper>

        {/* Section 2: Contact Support */}
        <ContactSection>
          <SectionTitle>Contact Support</SectionTitle>
          <ContactContent>
            <p>
              Can&apos;t find what you&apos;re looking for? Our dedicated support team is here to help you thrive.
            Reach out to us through the following channels:
            </p>
            <ContactDetails>
              <div>
                <strong>Email:</strong> <a href="mailto:support@aje360.com">support@aje360.com</a>
              </div>
              <div>
                <strong>Phone:</strong> <a href="tel:+2348012345678">+234 801 234 5678</a> (Example Number)
              </div>
              <div>
                <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM WAT
              </div>
            </ContactDetails>
            {/* Optional: Simple Contact Form - You'll need backend logic to handle submissions */}
            <ContactForm>
              <h3>Send us a Message</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </ContactForm>
          </ContactContent>
        </ContactSection>

      </Wrapper>
    </Page>
  );
}

// --- Styled Components for the Help Center Page ---

const Wrapper = styled.div`
  /* Ensures consistent spacing between major sections on the page */
  & > *:not(:first-child) {
    margin-top: 15rem; /* Increased margin for clear separation */
  }
`;

const FaqSectionWrapper = styled.section`
  /* Provides top padding for the FAQ section itself */
  padding-top: 5rem;
  /* The FaqSection component likely has its own internal padding/margins,
     so this wrapper just adds overall spacing. */
`;

const ContactSection = styled.section`
  text-align: center;
  padding: 5rem 0;
  background-color: #000; /* Consistent black background */
  color: #fff; /* Light text for readability */
`;

const ContactContent = styled(Container)`
  max-width: 800px; /* Constrain content width */
  p {
    font-size: 1.8rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8); /* Slightly muted white for body text */
    margin-bottom: 4rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Spacing between contact detail lines */
  font-size: 1.7rem;
  margin-bottom: 5rem;

  a {
    color: #FDD101; /* Yellow links */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: #fff; /* White for bold labels */
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* Spacing between form elements */
  max-width: 500px;
  margin: 0 auto; /* Center the form */

  h3 {
    font-size: 2.5rem;
    color: #FDD101; /* Yellow heading for the form */
    margin-bottom: 2rem;
  }

  input, textarea {
    width: 100%;
    padding: 1.5rem;
    border: 1px solid #555; /* Subtle border */
    border-radius: 8px;
    background-color: #181818; /* Dark input background */
    color: #fff; /* White text input */
    font-size: 1.6rem;
    outline: none; /* Remove default outline */

    &::placeholder {
      color: #aaa; /* Lighter placeholder text */
    }
  }

  textarea {
    min-height: 150px; /* Minimum height for message area */
    resize: vertical; /* Allow vertical resizing only */
  }

  button {
    padding: 1.5rem 3rem;
    background-color: #FDD101; /* Yellow button background */
    color: #000; /* Black text on button */
    border: none;
    border-radius: 8px;
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #ffea00; /* Slightly brighter yellow on hover */
    }
  }
`;

const ResourcesSection = styled.section`
  text-align: center;
  padding: 5rem 0;
  background-color: #000; /* Consistent black background */
  color: #fff; /* Light text */
`;

const ResourcesContent = styled(Container)`
  max-width: 800px; /* Constrain content width */
  p {
    font-size: 1.8rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 4rem;
  }
`;

const ResourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Spacing between resource items */
  font-size: 1.7rem;

  ${media('<=tablet')} {
    align-items: center; /* Center items on smaller screens */
  }
`;

const ResourceItem = styled.a`
  display: block; /* Makes the entire area clickable */
  padding: 1.5rem 2rem;
  background-color: #181818; /* Dark background for each item */
  border-radius: 8px;
  text-decoration: none;
  color: #FDD101; /* Yellow link color */
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.2s ease;
  width: fit-content; /* Adjust width to content */
  margin: 0 auto; /* Center the items */

  &:hover {
    background-color: #282828; /* Slightly lighter on hover */
    transform: translateY(-3px); /* Subtle lift effect */
  }

  ${media('<=tablet')} {
    width: 90%; /* Make items wider on mobile */
  }
`;