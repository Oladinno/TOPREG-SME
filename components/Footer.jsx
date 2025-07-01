import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

const footerItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },
  {
    title: 'Product',
    items: [
      { title: 'Our Apps', href: '/features' },
     // { title: 'Something', href: '/something' },
      //{ title: 'Something else', href: '/something-else' },
      //{ title: 'And something else', href: '/and-something-else' },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Help Center', href: '/help-center' },
    ],
  },
  
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} title={singleItem.title} items={singleItem.items} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            {/* Fix 1: Removed <a> and passHref for external links */}
            <NextLink href="https://www.twitter.com/my-saas-startup" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={50} round={true} />
            </NextLink>
            <NextLink href="https://www.facebook.com/my-saas-startup" target="_blank" rel="noopener noreferrer">
              <FacebookIcon size={50} round={true} />
            </NextLink>
            <NextLink href="https://www.linkedin.com/my-saas-startup" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={50} round={true} />
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2021 My Saas Startup</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} title={singleItem.title} href={singleItem.href} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }) {
  return (
    <ListItemWrapper>
      {/* Fix 2: Removed <a> and passHref for internal links */}
      <NextLink href={href}>
        {title}
      </NextLink>
    </ListItemWrapper>
  );
}

// Styled Components (no changes needed here, as the issue was in the JSX structure)
const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  /* This 'a' selector will now apply styles directly to the link rendered by NextLink */
  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;