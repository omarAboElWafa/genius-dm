import styled from 'styled-components';

const DashboardAside = styled.aside`
  grid-column: 1 / 3;
  grid-row: 1 / 13;
  background: var(--blackHover);
  color: white;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  @media (min-width: 992px) {
    grid-column: 1 / 4;
  }

  .asideLogo {
    grid-row: 1 / 2;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    img {
      max-width: 35px;
      max-height: 35px;
      margin: 0 auto;
      @media (min-width: 992px) {
        max-width: 100%;
      }
    }
  }

  .asideContent {
    grid-row: 2 / 13;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default DashboardAside;
