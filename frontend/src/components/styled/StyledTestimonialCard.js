import styled from 'styled-components';

const StyledTestimonialCard = styled.div`
  background: white;
  padding: 6rem 3rem 2rem;
  border-radius: 1rem;
  position: relative;
  & > * {
    text-align: left;
  }

  .TestimonialCardIcon {
    font-size: 20rem;
    color: var(--mainOrange);
    position: absolute;
    top: -9.2rem;
    left: -1.4rem;
    rotate: 180deg;
  }

  .TestimonialCardText {
    font-size: 2rem;
    color: var(--darkGray);
    padding: 1rem 0 2rem;
  }

  .TestimonialCardAvatar {
    display: flex;
    align-items: center;
    gap: 2rem;

    .clientImage {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .clientProfession {
      color: var(--darkGray);
      margin-top: 0.5rem;
    }
  }
`;

export default StyledTestimonialCard;
