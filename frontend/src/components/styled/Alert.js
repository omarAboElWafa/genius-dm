import styled from 'styled-components';

export const ErrorAlert = styled.div`
  width: 400px;
  padding: 1rem;
  background: var(--errorClr);
  color: white;
  border-radius: 0.5rem;
  margin: 1rem auto;
`;

export const SuccessAlert = styled(ErrorAlert)`
  background: var(--successClr);
`;
