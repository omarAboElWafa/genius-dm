import styled from 'styled-components';

const CounterCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 90%;
  }
`;

export default CounterCardsContainer;
