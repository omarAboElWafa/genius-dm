import { styled, Card } from '@mui/material';

const StyledProjectCard = styled(Card)`
  max-width: 345px;
  border-radius: 1rem;
  margin: 0 auto;

  .cardImage {
    background: var(--cardGrayBg);
    width: 100%;
    height: 250px;
  }

  .cardContent {
    padding: 3rem;
    text-align: left;
  }

  .cardTitle {
    color: var(--mainOrange);
    font-size: 2.8rem;
    font-weight: bold;
    font-family: var(--enFont);
    overflow: hidden;
    white-space: no-wrap;
    text-overflow: ellipsis;
  }

  .cardText {
    color: black;
    font-size: 2rem;
    font-family: var(--enFont);
    overflow: hidden;
    white-space: no-wrap;
    text-overflow: ellipsis;
  }
`;

export default StyledProjectCard;
