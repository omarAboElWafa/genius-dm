import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  width: 85%;
  margin: 6rem auto 0;

  .swiper {
    padding: 4rem 0 10rem;

    .swiper-button-prev,
    .swiper-button-next {
      background: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      top: 90%;
      &:hover {
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      }
    }

    .swiper-button-next {
      right: 30%;
      @media (min-width: 576px) {
        right: 35%;
      }
      @media (min-width: 992px) {
        right: 43%;
      }
    }

    .swiper-button-prev {
      left: 30%;
      @media (min-width: 576px) {
        left: 35%;
      }
      @media (min-width: 992px) {
        left: 43%;
      }
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      color: var(--mainOrange);
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

export default TestimonialsContainer;
