import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  position: absolute;
  top: 66px;
  display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 2rem 0;
  background: rgba(247, 148, 29, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(247, 148, 29, 0.3);
  z-index: 5;
  @media (min-width: 571px) {
    top: 58px;
  }
  @media (min-width: 600px) {
    top: 74px;
  }
  @media (min-width: 992px) {
    position: relative;
    top: 0;
    width: auto;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background: inherit;
    backdrop-filter: none;
  }

  a {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
    white-space: nowrap;
    color: black;
    transition: color 0.3s ease;
    cursor: pointer;
    text-align: center;
    &:hover {
      color: white;
    }
    @media (min-width: 992px) {
      font-weight: normal;
      &:hover {
        color: var(--mainOrange);
      }
    }
  }

  a.active {
    color: white;
    @media (min-width: 992px) {
      color: var(--mainOrange);
    }
  }
`;

export default StyledNav;
