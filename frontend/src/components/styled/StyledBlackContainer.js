import styled from 'styled-components';

const StyledBlackContainer = styled.section`
  background: black;
  padding: ${(props) => (props.padding ? props.padding : '10rem 0')};
  position: relative;
`;

export default StyledBlackContainer;
