import { styled, CardActionArea } from '@mui/material';

const StyledCardActionArea = styled(CardActionArea)`
  max-width: 300px;
  height: 295px;
  border-radius: 1rem;
  position: relative;
  background: white;
  & * {
    transition: all 0.3s ease;
  }

  .CardContent {
    height: 275px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CardIcon {
    font-size: 6rem;
    color: var(--mainOrange);
  }

  .CardTitle {
    font-family: var(--enFont);
    font-weight: bold;
    margin: 1rem auto;
  }

  .CardText {
    font-family: var(--enFont);
    font-size: 1.6rem;
  }

  .ArrowIcon {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.8rem 0.2rem;
    width: 4rem;
    margin: 0 auto -6rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  &:hover {
    background: var(--mainOrange);

    .CardContent {
      height: 295px;
      margin-bottom: 0;
    }

    .CardIcon {
      color: black;
      transform: translateY(-1rem);
    }

    .CardTitle,
    .CardText {
      color: white;
      transform: translateY(-1rem);
    }

    .ArrowIcon {
      background: white;
      margin: 0 auto -1rem;
      padding: 1rem 0;
    }
  }
`;

export default StyledCardActionArea;
