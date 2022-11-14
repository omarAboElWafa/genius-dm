import { styled, Paper } from '@mui/material';

const StyledPaper = styled(Paper)`
  width: 200px;

  a {
    width: 100%;
    font-size: 16px;
    font-family: var(--enFont);
    font-weight: bold;
    color: black;
    transition: color 0.3s ease;
    &:hover {
      color: var(--mainOrange);
    }
    @media (min-width: 992px) {
      font-weight: normal;
    }
  }

  a.active {
    color: var(--mainOrange);
  }
`;

export default StyledPaper;
