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
        <title>Aje 360 | Empowering Africa&apos;s Entrepreneurs</title>
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
           From invoicing, to sales and customer management, to inventory, finances, growth tracking, operations & management,  <strong> AJE360</strong> equips you with everything to run and grow your business — no manual workflows, no mundane tasks, just smart, AI-powered automation.

            <br /><br />
            We believe in a continent where no business — especially small and medium-sized enterprises — is left behind. From the roadside vendor to the rising startup, every entrepreneur deserves simple yet powerful tools to operate and thrive like a global player.
          </BasicSection>

          {/* Value Proposition Section */}
          <BasicSection
            imageUrl="/home2.jpg"
            title="Why Aje 360?"
            overTitle="Built for Growth"
            reversed
          >
            <p>
              We don&apos;t just help African businesses survive — we help them thrive. Our platform is designed to
              equip you with the systems and confidence to manage your operations like a pro.
            </p>
            <ul>
              <li><strong>Smart Invoicing</strong> — Create and track invoices effortlessly.</li>
              <li><strong>Expense Recording</strong> — Easily log and categorize all your business expenditures.</li>
              <li><strong>Inventory Tools</strong> — Stay on top of your stock and supplies.</li>
              <li><strong>Business Insights</strong> — Make informed decisions with data-driven dashboards.</li>
              <li><strong>Agentic AI Integration</strong> — Leverage intelligent automation for smarter business processes.</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>

        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
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
