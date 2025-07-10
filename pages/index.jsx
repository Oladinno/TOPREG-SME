import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }) {
  return (
    <>
      <Head>
        <title>TOPREG SME | We turn Nigerian hustles into structured and scalable businesses.</title>
        <meta
          name="description"
          content="Aje 360 – powerful tools for African SMEs to thrive with clarity, confidence, and control."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />

          {/* Vision Statement Section */}
          <BasicSection
            imageUrl="/demo 6.jpg"
            title="Empowering African Entrepreneurs"
            overTitle="Our Vision"
          >
        

We envision a Nigeria where every business owner — whether it’s the woman selling fashion products at home or the man managing a small logistics startup — has a clear, structured path to building a structured business.
<br />
A Nigeria where entrepreneurs don’t just hustle — but build businesses that grow, scale, and succeed with precision.  
<br />
No more running blind. No more winging it. Just access and assistance to the right legal compliances, systems, tools, and business growth guidance from day one of your entrepreneurial venture.
          </BasicSection>

          {/* Value Proposition Section */}
          <BasicSection
            imageUrl="/home2.jpg"
            title="💡 Why TOPREG SME?"
            overTitle="Built for Growth"
            reversed
          >
            <p>
              We don’t just register your business and leave you hanging.
              <br />
              At TOPREG SME, we walk with you beyond incorporation — because we know that’s just the beginning.
              <br />After you legally register your business, we equip you with real tools to help you operate and grow:

            </p>
            <ul>
              <li><strong>HR Documentation Toolkit</strong> —  To guide your hiring process, employee onboarding, and staff management like a pro.</li>
              <li><strong>Aje Invoicer</strong> —  Our advanced invoicing app built for Nigerian businesses to create receipts, track payments, and manage revenue.</li>
              <li><strong>CompanyBuddy</strong> — your digital assistant for all CAC-related tasks, reminders, and safe, organized storage of important business documents.</li>
            </ul>

            <p> 
              We’re not just about helping you start — we’re here to help you grow, stay compliant, and scale with structure.
            </p>

          </BasicSection>
        </WhiteBackgroundContainer>

        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
