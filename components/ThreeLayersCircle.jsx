import styled from 'styled-components';
import { media } from 'utils/media';

const ThreeLayersCircle = styled.div`
  position: relative;
  display: inline-block;
  opacity: 0.8;
  width: 5rem;
  height: 5rem;
  border-radius: 100rem;
  background: ${({ baseColor }) => `rgb(${baseColor})`};
  z-index: 0;
  transition: background 0.2s;

  ${media('<=tablet')} {
    width: 4rem;
    height: 4rem;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100rem;
    z-index: -1;
  }

  &:after {
    width: 4rem;
    height: 4rem;
    background: ${({ secondColor }) => `rgb(${secondColor})`};
    z-index: -2;
  }

  &:before {
    width: 2rem;
    height: 2rem;
    background: ${({ baseColor }) => `rgb(${baseColor})`};
  }
`;

export default ThreeLayersCircle;
