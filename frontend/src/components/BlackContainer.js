import { Container } from '@mui/material';
import StyledBlackContainer from './styled/StyledBlackContainer';
import { Circular1, Circular2 } from './styled/Circular';
import Circles from '../assets/Circles Image-min.svg';

const BlackContainer = ({ children, padding }) => {
  return (
    <StyledBlackContainer padding={padding}>
      <Circular1 src={Circles} alt='counter circular background' />
      <Container maxWidth='md'>{children}</Container>
      <Circular2 src={Circles} alt='counter circular background' />
    </StyledBlackContainer>
  );
};

export default BlackContainer;
