import styled from 'styled-components';

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
  }
`;

export default SectionContent;
