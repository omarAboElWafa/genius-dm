import styled from 'styled-components';

export const ServicesCardsContainer = styled.div`
  margin: 5rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 90%;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 90%;
  }
`;
