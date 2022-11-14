import styled from 'styled-components';

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: inline-block;
  width: 60px;
  height: 60px;

  &:after {
    content: ' ';
    display: block;
    width: 44px;
    height: 44px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid var(--mainOrange);
    border-color: var(--mainOrange) transparent var(--mainOrange) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
