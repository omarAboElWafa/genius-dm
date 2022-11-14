import { Container } from '@mui/material';
import StyledNotFound from '../components/styled/StyledNotFound';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Link } from 'react-router-dom';
import { GetStartedButton } from '../components/styled/Buttons';

const NotFound = () => {
  return (
    <>
      <Container maxWidth='md'>
        <StyledNotFound>
          <WarningAmberIcon sx={{ color: 'var(--mainOrange)', fontSize: '20rem' }} />
          <h1 className='pageTitle'>404</h1>
          <h2 className='pageSubTitle'>Page Not Found</h2>
          <p className='pageText'>
            We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
          </p>
          <Link to='/'>
            <GetStartedButton>Go Back To Home</GetStartedButton>
          </Link>
        </StyledNotFound>
      </Container>
    </>
  );
};

export default NotFound;
