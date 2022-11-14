import styled from 'styled-components';

const StyledNotFound = styled.div`
  text-align: center;
  padding-bottom: 20rem;

  .pageTitle {
    color: var(--mainOrange);
    font-size: 8rem;
  }

  .pageSubTitle {
    font-size: 6rem;
    margin: 1rem auto 3rem;
  }
  .pageText {
    font-size: 1.6rem;
    margin: 0 auto 3rem;
    color: var(--darkGray);
    width: 85%;
    max-width: 530px;
  }
`;

export default StyledNotFound;
