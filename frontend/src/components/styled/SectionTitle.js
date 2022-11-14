import { styled, Typography } from '@mui/material';

const SectionTitle = styled(Typography)`
  color: ${(props) => (props.color ? props.color : 'var(--mainOrange)')};
  font-family: var(--enFont);
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export default SectionTitle;
