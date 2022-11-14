import styled from 'styled-components';

const StyledFooter = styled.footer`
  min-height: 100vh;
  background: black;
  position: relative;
  color: white;

  .footerSections {
    padding: 10rem 2rem 4rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5rem;
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 3rem;
      padding: 10rem 0 4rem;
    }
  }

  /* Address */
  .address {
    .addressItem {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }
    .socialIconButton {
      width: 35px;
      height: 35px;
      transition: all 0.3s ease;
      border: 2px solid white;
      margin-right: 1.5rem;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      svg {
        width: 22px;
        height: 22px;
        fill: white;
        transition: all 0.3s ease;
      }
      &:hover {
        background: white;
        svg {
          fill: black;
        }
      }
    }
  }

  /* Quick Links */
  .quickLinks {
    .links a {
      display: block;
      color: white;
      height: 1rem;
      margin-bottom: 2rem;
      &:last-child {
        margin-bottom: 0rem;
      }
      &:hover {
        color: var(--mainOrange);
        span {
          transition: all 0.2s ease;
          font-size: 1.7rem;
        }
      }
    }
  }

  /* Gallery */
  .gallery {
    .galleryImages {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 260px;
      grid-gap: 1rem;
      img {
        background: var(--cardGrayBg);
        width: 80px;
        height: 60px;
        object-fit: cover;
      }
    }
  }

  /* Newsletter */
  .newsletter {
    max-width: 350px;
    .newsletterText {
      width: 300px;
      line-height: 2.5rem;
      margin-bottom: 2rem;
    }
    form {
      margin: 0;
    }
  }

  /* Copyright */
  .footerSections2 {
    padding: 4rem 2rem 20rem;
    border-top: 1px solid var(--darkGray);
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
    }
    @media (min-width: 1200px) {
      padding: 4rem 0 20rem;
    }

    .copyrights {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      max-width: 300px;
      margin: 0 auto 4rem;
      text-align: center;
      line-height: 2.5rem;
      a {
        color: white;
        text-decoration: underline;
      }
      @media (min-width: 992px) {
        max-width: 600px;
        align-items: flex-start;
        gap: 2rem;
        margin: 0 0 4rem;
      }
    }

    .copyrightLinks {
      max-width: 300px;
      margin: 0 auto;
      @media (min-width: 992px) {
        margin: 0;
      }

      a {
        color: white;
        &:hover {
          text-decoration: underline;
        }
      }

      a::after {
        content: '';
        display: inline-block;
        height: 1rem;
        width: 1px;
        background: var(--darkGray);
        margin: 0 2rem;
      }

      a:last-child::after {
        display: none;
      }
    }
  }

  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    object-fit: cover;
  }
`;

export default StyledFooter;
