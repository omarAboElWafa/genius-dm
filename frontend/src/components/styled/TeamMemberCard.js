import styled from 'styled-components';

const TeamMemberCard = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: white;

  .teamMemberImage {
    scale: 0.85;
  }

  .memberName {
    font-size: 2.2rem;
    font-weight: bold;
  }

  .memberTitle {
    font-size: 1.8rem;
    color: var(--darkGray);
    margin-bottom: 2rem;
  }

  .socialIcons {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem 4rem;
    border-top: 1px solid var(--dividerClr);
  }

  .socialIconButton {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;

    svg {
      width: 22px;
      height: 22px;
      fill: var(--mainOrange);
      transition: all 0.3s ease;
    }

    &:hover {
      background: var(--mainOrange);
      svg {
        fill: white;
      }
    }
  }
`;

export default TeamMemberCard;
