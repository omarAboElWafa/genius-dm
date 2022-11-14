import styled from 'styled-components';

const DashboardMain = styled.div`
  grid-column: 3 / 19;
  grid-row: 2 / 13;
  padding: 2rem;
  overflow-y: auto;
  @media (min-width: 992px) {
    grid-column: 4 / 19;
    padding: 3rem 6rem;
  }
`;

export default DashboardMain;
