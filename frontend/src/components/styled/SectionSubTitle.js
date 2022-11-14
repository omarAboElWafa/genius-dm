import { styled, Typography } from '@mui/material';

const SectionSubTitle = styled(Typography)`
  font-family: var(--enFont);
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 6.5rem;
  @media (min-width: 667px) {
    width: 500px;
  }
  @media (min-width: 992px) {
    width: 110%;
  }
`;

export default SectionSubTitle;
