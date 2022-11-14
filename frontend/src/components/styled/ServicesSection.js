import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: ${(props) => (props.lowTopPadding ? '7rem 0 20rem' : '20rem 0')};
  text-align: center;
  & p:nth-child(2) {
    width: 100%;
    margin: 0 auto;
  }
`;
