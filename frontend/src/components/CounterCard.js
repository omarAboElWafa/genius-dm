import StyledCounterCard from './styled/StyledCounterCard';
import { forwardRef } from 'react';

const CounterCard = forwardRef((props, ref) => {
  const { cardIcon, cardNumber, cardTitle } = props;

  return (
    <StyledCounterCard ref={ref}>
      {cardIcon}
      <h3 className='cardNumber'>{cardNumber}</h3>
      <p className='cardTitle'>{cardTitle}</p>
    </StyledCounterCard>
  );
});

export default CounterCard;
