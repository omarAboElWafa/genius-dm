import { Container } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';
import { GetStartedButton } from './styled/Buttons';
import { StyledAppBar, StyledToolbar, StyledLogo, StyledIconButton, StyledMenuIcon, StyledCloseIcon } from './styled/StyledHeader';
import Logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const appBarRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (appBarRef.current) {
        if (!window.pageYOffset) {
          appBarRef.current.style.cssText += `
          background: var(--lightGray);
          box-shadow: none;
        `;
        } else {
          appBarRef.current.style.cssText += `
          background: rgba(246, 244, 249, 0.8);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
        `;
        }
      }
    });
  });

  return (
    <StyledAppBar ref={appBarRef} className='StyledAppBar' position='sticky'>
      <Container maxWidth='lg'>
        <StyledToolbar disableGutters>
          <Link to='/'>
            <StyledLogo src={Logo} alt='site logo' />
          </Link>
          <StyledIconButton edge='start' aria-label='menu' sx={{ color: 'var(--mainOrange)' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />}
          </StyledIconButton>
          <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <GetStartedButton onClick={() => navigate('/contact')} variant='contained' size='large'>
            Get Started
          </GetStartedButton>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};
export default Header;
