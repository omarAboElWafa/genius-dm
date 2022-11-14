import styled from 'styled-components';

const StyledPageHero = styled.div`
  height: calc(100vh - 84px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .banner {
    width: 25rem;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(247, 148, 29, 1) 100%);
  }
`;

export default StyledPageHero;
