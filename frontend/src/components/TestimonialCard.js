import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StyledTestimonialCard from './styled/StyledTestimonialCard';

const TestimonialCard = ({ cardText, clientImage, clientName, profession }) => {
  return (
    <StyledTestimonialCard>
      <FormatQuoteIcon className='TestimonialCardIcon' />
      <p className='TestimonialCardText'>{cardText?.slice(0, 155)}</p>
      <div className='TestimonialCardAvatar'>
        <img className='clientImage' src={clientImage} alt='testimonial img' />
        <div>
          <h3 className='clientName'>{clientName}</h3>
          <p className='clientProfession'>{profession}</p>
        </div>
      </div>
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;
