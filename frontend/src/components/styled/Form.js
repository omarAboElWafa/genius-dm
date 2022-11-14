import styled from 'styled-components';

const Form = styled.form`
  width: 90%;
  max-width: ${(props) => (props.width ? props.width : '600px')};
  margin: 4rem auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;

  .name,
  .email,
  .subject,
  .message,
  .password {
    padding: 2rem;
    border-radius: 1rem;
    font-family: var(--enFont);
    font-size: 1.6rem;
    border: 0;
    outline: 1px solid var(--dividerClr);
  }

  .name,
  .email {
    width: 100%;
    @media (min-width: 768px) {
      width: ${(props) => (props.width ? '100%' : '48%')};
    }
  }

  .subject,
  .message,
  .password {
    width: 100%;
  }

  button[type='submit'] {
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
    border: 0;
  }
`;

export default Form;
