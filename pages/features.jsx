import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';


// Commented out the FEATURES array
/*
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
*/

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Explore the powerful tools Aje360 offers to help African businesses thrive.">
      <Wrapper>
        <SectionTitle>Explore What Aje360 Can Do For You</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        {/* Commented out the CustomAutofitGrid that renders the features */}
        {/*
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
        */}
         {/* ======================================================= */}
        {/* Section for AJÉ INVOICER & EXPENSE MANAGER */}
        {/* ======================================================= */}
        <ProductSection>
          <ProductTitle>AJÉ INVOICER & EXPENSE MANAGER</ProductTitle>
          <ProductDescription>
            Ajé Invoicer & Expense Manager is your all-in-one solution for effortless financial management.
            Create professional invoices in seconds, track payments, and get paid faster — with zero stress.
            Seamlessly manage your business expenses, monitor cash flow, and gain full control over your finances.
          </ProductDescription>

          <FeatureShowcase>
            {/* INVOICER - Hero */}
            <FeatureBlock>
              <FeatureImage src="/demo 1.png" alt="Ajé Invoicer App Icon and Interface" />
              <FeatureSubtitle>INVOICER: Create an invoice in 3 easy steps</FeatureSubtitle>
              <FeatureDetail>
                Ajé Invoicer simplifies your invoicing process, allowing you to generate professional,
                customizable invoices with just a few taps. Focus on your business, not on paperwork.
              </FeatureDetail>
            </FeatureBlock>

            {/* INVOICER - Step 1 */}
            <FeatureBlock>
              <FeatureImage src="/demo 2.png" alt="Step 1: Fill in Your Business Details" />
              <FeatureSubtitle>STEP 1: FILL IN YOUR BUSINESS DETAILS</FeatureSubtitle>
              <FeatureDetail>
                Start by setting up your business profile. Easily input your company name, address,
                bank details, and even upload your business logo for a personalized and professional touch
                on all your invoices.
              </FeatureDetail>
            </FeatureBlock>

            {/* INVOICER - Step 2 */}
            <FeatureBlock>
              <FeatureImage src="/demo 3.png" alt="Step 2: Create an Invoice" />
              <FeatureSubtitle>STEP 2: CREATE AN INVOICE</FeatureSubtitle>
              <FeatureDetail>
                Effortlessly add customer details, list products or services with quantities and costs.
                The system automatically calculates the total amount due, ensuring accuracy and saving you time.
                Preview your invoice before sending to ensure everything is perfect.
              </FeatureDetail>
            </FeatureBlock>

            {/* INVOICER - Step 3 */}
            <FeatureBlock>
              <FeatureImage src="/App Launch Your Story in Black Bright Green Cool Corporate Style - 4.png" alt="Step 3: Share Your Invoice" />
              <FeatureSubtitle>STEP 3: SHARE YOUR INVOICE!</FeatureSubtitle>
              <FeatureDetail>
                Once created, easily share your professional invoices directly with your clients
                via email, WhatsApp, or other preferred messaging platforms. This seamless sharing
                process helps you get paid faster and reduces communication gaps.
              </FeatureDetail>
            </FeatureBlock>

            {/* INVOICER - Tracking */}
            <FeatureBlock>
              <FeatureImage src="/demo 4.png" alt="Track Your Lifetime Invoice Amount" />
              <FeatureSubtitle>TRACK YOUR LIFETIME INVOICE AMOUNT</FeatureSubtitle>
              <FeatureDetail>
                Keep a real-time tab on all your invoices. Monitor total invoiced amounts,
                view individual invoice statuses (paid, pending, overdue), and manage outstanding payments effortlessly.
                Gain clear insights into your sales performance.
              </FeatureDetail>
            </FeatureBlock>
          </FeatureShowcase>
        </ProductSection>


        {/* ======================================================= */}
        {/* Section for COMPANY BUDDY */}
        {/* ======================================================= */}
        <ProductSection>
          <ProductTitle>COMPANY BUDDY</ProductTitle>
          <ProductDescription>
            Company Buddy is your ultimate digital partner for business compliance and company registration in Nigeria.
            Access essential Corporate Affairs Commission (CAC) services and legal assistance right from your mobile device,
            ensuring your business stays compliant and runs smoothly.
          </ProductDescription>

          <FeatureShowcase>
            {/* COMPANY BUDDY - Main Feature */}
            <FeatureBlock>
              <FeatureImage src="/demo 5.png" alt="CAC Services at my finger tip!" />
              <FeatureSubtitle>CAC Services at your fingertips!</FeatureSubtitle>
              <FeatureDetail>
                Streamline your business registration processes. Company Buddy provides
                easy access to CAC Registration for new businesses, SCUML Registration for financial institutions,
                and direct chat with expert agents for personalized guidance and support on all your compliance needs.
              </FeatureDetail>
            </FeatureBlock>
            {/* Add more Company Buddy specific feature blocks if you have more images/details */}
          </FeatureShowcase>
        </ProductSection>


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


const PageDescription = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: #333333; /* Changed to dark grey for visibility on light background */
  max-width: 800px;
  margin: 2rem auto 8rem;
  line-height: 1.6;
  ${media('<=tablet')} {
    font-size: 1.6rem;
    margin: 2rem auto 6rem;
  }
`;

const ProductSection = styled.section`
  margin-top: 15rem;
  &:first-of-type {
    margin-top: 10rem;
  }
`;

const ProductTitle = styled(SectionTitle)`
  margin-bottom: 3rem;
  font-size: clamp(3rem, 5vw, 5rem);
  color: #333333; /* Changed to dark grey for visibility on light background */
  ${media('<=tablet')} {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
  }
`;

const ProductDescription = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #333333; /* Changed to dark grey for visibility on light background */
  max-width: 900px;
  margin: 0 auto 8rem;
  line-height: 1.8;
  ${media('<=tablet')} {
    font-size: 1.8rem;
    margin: 0 auto 6rem;
  }
`;

const FeatureShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  padding: 20px;
  margin-top: 30px;
`;

const FeatureBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #181818; /* This background color implies the text inside should be light */
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

const FeatureSubtitle = styled.h3`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: bold;
  color: #FDD101; /* Kept yellow for contrast on the dark FeatureBlock background */
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const FeatureDetail = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.8); /* Kept light for contrast on the dark FeatureBlock background */
  line-height: 1.6;
  margin-bottom: 1rem;
`;