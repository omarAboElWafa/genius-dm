import { NavLink, useLocation } from 'react-router-dom';
import StyledNav from './styled/StyledNav';
import { useRef, useEffect } from 'react';

const NavLinks = ({ isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();
  const homeRef = useRef();

  useEffect(() => {
    if (pathname !== '/') homeRef.current?.classList.remove('active');
    if (pathname === '/') homeRef.current?.classList.add('active');
  });

  return (
    <StyledNav isMenuOpen={isMenuOpen}>
      <NavLink ref={homeRef} to='/' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Home
      </NavLink>
      <NavLink to='/about' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        About
      </NavLink>
      <NavLink to='/service' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Service
      </NavLink>
      <NavLink to='/project' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Project
      </NavLink>
      <NavLink to='/ourTeam' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Our Team
      </NavLink>
      <NavLink to='/contact' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Contact
      </NavLink>
    </StyledNav>
  );
};

export default NavLinks;
