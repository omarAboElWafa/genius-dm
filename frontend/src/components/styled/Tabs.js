import styled from 'styled-components';

export const Tabs = styled.div`
  width: 90%;
  max-width: 550px;
  margin: 4rem auto 0rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Tab = styled.p`
  font-family: var(--enFont);
  font-size: 2rem;
  max-width: 150px;
  text-transform: capitalize;
  padding-bottom: 0.5rem;
  white-space: nowrap;
  cursor: pointer;

  &.active {
    color: var(--mainOrange);
    border-bottom: 2px solid var(--mainOrange);
  }
`;
