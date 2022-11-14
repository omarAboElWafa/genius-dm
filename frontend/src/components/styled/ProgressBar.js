import { styled, LinearProgress } from '@mui/material';

const ProgressBar = styled(LinearProgress)`
  background: white;
  width: 100%;
  max-width: 400px;
  span {
    background: ${(props) => props.bg};
  }
`;

export default ProgressBar;
