import styled from 'styled-components';

const StyledNewsletterForm = styled.form`
  background: white;
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  border-radius: 30px;
  overflow: hidden;
  @media (min-width: 768px) {
    max-width: 550px;
  }
  @media (min-width: 992px) {
    max-width: 650px;
  }

  input {
    width: 100%;
    padding: 1.5rem;
    border: 0;
    font-size: 1.7rem;
    outline: 0;
  }
`;

export default StyledNewsletterForm;
