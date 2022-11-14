import { styled, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const StyledAppBar = styled(AppBar)`
  padding: 1rem 0;
  background: var(--lightGray);
  box-shadow: none;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledLogo = styled('img')({
  width: 130,
  height: 50,
});

export const StyledIconButton = styled(IconButton)`
  @media (min-width: 992px) {
    display: none;
  }
`;

const baseIconStyles = `
  font-size: 2.8rem;
  color: var(--darkGray);
  cursor: pointer;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  ${baseIconStyles}
`;

export const StyledCloseIcon = styled(CloseIcon)`
  ${baseIconStyles}
`;
