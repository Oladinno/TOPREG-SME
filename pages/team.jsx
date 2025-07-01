// pages/team.js

import styled from 'styled-components';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import AutofitGrid from 'components/AutofitGrid'; // Re-using AutofitGrid for team member layout
import { media } from 'utils/media';

// Define team member data
const TEAM_MEMBERS = [
  {
    image: '/team/john-doe.jpg', // Placeholder image path, replace with actual image
    name: 'John Doe',
    role: 'CEO / Team Lead',
    about:
      'Visionary leader at the helm, driving strategic growth and fostering innovation. John brings years of experience in market expansion and community building, guiding our team with a clear mission.',
  },
  {
    image: '/team/jane-smith.jpg', // Placeholder image path, replace with actual image
    name: 'Jane Smith',
    role: 'CTO',
    about:
      'Mastermind behind our robust technology stack. Jane ensures our platforms are scalable, secure, and cutting-edge, translating complex ideas into seamless digital experiences.',
  },
  {
    image: '/team/mike-johnson.jpg', // Placeholder image path, replace with actual image
    name: 'Mike Johnson',
    role: 'CFO',
    about:
      'Overseeing all financial operations with precision and foresight. Mike is dedicated to sustainable financial health, optimizing resources and ensuring fiscal responsibility.',
  },
];

export default function TeamPage() {
  return (
    <Page title="Our Team" description="Meet the dedicated leadership behind Aje360.">
      <Wrapper>
        {/* SectionTitle uses the default light color from its component, fitting the dark background */}
        <SectionTitle>Meet Our Leadership Team</SectionTitle>
        <PageDescription>
          Our team is comprised of passionate and experienced individuals dedicated to empowering African entrepreneurs through technology.
        </PageDescription>

        <TeamGrid>
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamMemberCard key={idx}>
              <TeamImage src={member.image} alt={member.name} />
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <TeamAbout>{member.about}</TeamAbout>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const PageDescription = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8); /* Light grey for text on dark background, consistent with homepage */
  max-width: 800px;
  margin: 2rem auto 8rem;
  line-height: 1.6;
  ${media('<=tablet')} {
    font-size: 1.6rem;
    margin: 2rem auto 6rem;
  }
`;

const TeamGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 35rem; /* Adjust card size */
  justify-content: center; /* Center cards if they don't fill the row */

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem;
  border-radius: 12px;
  background-color: #181818; /* Dark background for the card, consistent with FeatureBlock */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 4px solid #FDD101; /* Accent border color */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const TeamName = styled.h3`
  font-size: clamp(2.2rem, 3vw, 3rem);
  font-weight: bold;
  color: #FDD101; /* Yellow for names, consistent with titles on dark background */
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const TeamRole = styled.h4`
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7); /* Light grey for role */
  margin-bottom: 1.5rem;
`;

const TeamAbout = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9); /* White/off-white for description */
`;
