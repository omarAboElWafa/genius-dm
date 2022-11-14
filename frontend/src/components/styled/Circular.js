import styled from 'styled-components';

const CircularBaseStyles = `
width: 120px;
position: absolute;
@media (min-width: 768px) {
  width: 150px;
}
`;

export const Circular1 = styled.img`
  ${CircularBaseStyles}
  right: 0;
  top: 0;
  rotate: 270deg;
`;

export const Circular2 = styled.img`
  ${CircularBaseStyles}
  left: 0;
  bottom: 0;
  rotate: 90deg;
`;
