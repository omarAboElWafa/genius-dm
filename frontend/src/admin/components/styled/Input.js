import styled from 'styled-components';

export const InputStyles = `
  padding: 1.25rem;
  border-radius: 0.5rem;
  font-family: var(--enFont);
  font-size: 1.6rem;
  border: 0;
  outline: 1px solid var(--dividerClr);
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 75%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Input = styled.input`
  ${InputStyles}
`;

export default Input;
