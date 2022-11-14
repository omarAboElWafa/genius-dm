import styled from 'styled-components';

const AsideListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem auto;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  .listTitle {
    display: none;
    @media (min-width: 992px) {
      display: inline-block;
    }
  }

  &.active {
    background: var(--activeDashboardItem);
    border-radius: 0.5rem;
  }
`;

export default AsideListTitle;
