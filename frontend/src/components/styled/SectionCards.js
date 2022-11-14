import styled from 'styled-components';

const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 96%;
    margin: 0 auto;
  }
`;

export default SectionCards;
