import { styled, Button } from '@mui/material';

const StyledButton = `
  color: white;
  background: var(--mainOrange);
  font-size: 1.8rem;
  font-family: var(--enFont);
  text-transform: capitalize;
  padding: 4px 18px;
  &:hover {
    background: var(--mainOrangeHover);
  }
`;

export const GetStartedButton = styled(Button)`
  ${StyledButton}
  display: none;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;

export const ReadMoreButton = styled(Button)`
  ${StyledButton}
`;

export const ContactUsButton = styled(Button)`
  ${StyledButton}
  background: black;
  &:hover {
    background: var(--blackHover);
  }
`;
