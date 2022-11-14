import styled from 'styled-components';

const HeroTextualContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 992px) {
    text-align: left;
    align-items: flex-start;
    width: 50%;
  }

  h1 {
    color: var(--mainOrange);
    font-size: 4rem;
    font-weight: bold;
    line-height: 6rem;
    margin-bottom: 2.5rem;
    @media (max-width: 576px) {
      width: 300px;
    }
    @media (min-width: 577px) {
      font-size: 5rem;
      line-height: 8rem;
    }
    @media (min-width: 720px) {
      width: 650px;
    }
    @media (min-width: 992px) {
      width: auto;
      line-height: 6rem;
      width: 600px;
    }
  }

  p {
    font-size: 1.6rem;
    width: 80%;
    line-height: 2.5rem;
    margin-bottom: 2.5rem;
    @media (min-width: 992px) {
      width: 475px;
    }
  }

  .HeroButtons {
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

export default HeroTextualContent;
