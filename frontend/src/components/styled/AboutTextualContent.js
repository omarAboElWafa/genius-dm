import styled from 'styled-components';

export const AboutTextualContent = styled.div`
  @media (min-width: 992px) {
    width: 90%;
  }
`;

export const TextualContent = styled.div`
  .text {
    width: 95%;
    line-height: 2.5rem;
    color: var(--darkGray);
    @media (min-width: 667px) {
      width: 500px;
    }
    @media (min-width: 992px) {
      width: 95%;
    }
  }
`;
