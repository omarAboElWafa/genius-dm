import styled from 'styled-components';

const DashboardHeading = styled.header`
  grid-column: 3 / 19;
  grid-row: 1 / 2;
  background: var(--mainOrange);
  display: flex;

  @media (min-width: 992px) {
    grid-column: 4 / 19;
  }

  .headerContent {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

export default DashboardHeading;
