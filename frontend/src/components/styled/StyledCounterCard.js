import styled from 'styled-components';

const StyledCounterCard = styled.div`
  text-align: center;
  width: 250px;
  color: white;
  @media (min-width: 768px) {
    margin-bottom: 0rem;
    width: 45%;
  }
  @media (min-width: 992px) {
    width: 20%;
  }

  .cardNumber {
    font-size: 3.5rem;
    margin: 1rem 0;
    letter-spacing: 2px;
  }

  .cardTitle {
    font-size: 1.9rem;
  }
`;

export default StyledCounterCard;
