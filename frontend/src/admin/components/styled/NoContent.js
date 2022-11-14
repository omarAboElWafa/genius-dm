import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import styled from 'styled-components';

const NoContent = () => {
  return (
    <StyledNoContent>
      <DescriptionTwoToneIcon sx={{ fontSize: '12rem', color: 'var(--mainOrange)' }} />
      <div>No Content Found</div>
    </StyledNoContent>
  );
};

export default NoContent;

const StyledNoContent = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  font-family: var(--enFont);
`;
