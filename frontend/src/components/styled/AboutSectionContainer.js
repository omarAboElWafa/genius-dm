import styled from 'styled-components';
import HeroSection from './HeroSection';

const AboutSectionContainer = styled(HeroSection)`
  min-height: 100vh;
  padding: ${(props) => (props.lowTopPadding ? '14rem 0 20rem' : '20rem 0')};
`;

export default AboutSectionContainer;
