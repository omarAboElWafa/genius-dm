import { OurTeam as OurTeamSection } from '../sections/OurTeam';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import styled from 'styled-components';

const OurTeam = () => {
  return (
    <StyledOurTeam>
      <ScrollToTopOnMount />
      <OurTeamSection paddingTop='7rem' />
    </StyledOurTeam>
  );
};

export default OurTeam;

const StyledOurTeam = styled.div`
  .getCLoserBtn {
    display: none;
  }
`;
