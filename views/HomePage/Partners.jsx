import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  'partner1.jpg',
  'partner2.jpg',
  'partner3.jpg',
  'partner4.jpg',
  'partner5.jpg',
  'partner6.jpg',
  'partner7.jpg',
  'partner8.jpg',
  'partner9.jpg',
  'partner10.jpg',
  'partner11.jpg',
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>official partners with</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        breakpoints={{
           320: { slidesPerView: 2, spaceBetween: 15 }, // Adjusted space for smaller screens
          768: { slidesPerView: 4, spaceBetween: 20 },
          1025: { slidesPerView: 6, spaceBetween: 30 },
        }}
        
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage
              src={'/partners/' + logo}
              alt={normalizePartnerLogoName(logo)}
               width={180} // Example: a typical logo width
              height={90} // Example: a typical logo height
              objectFit="contain"
              className="partner-logo-image"
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo) {
  return logo.replace('.jpg', '');
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 1;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
