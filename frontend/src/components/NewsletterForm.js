import SendIcon from '@mui/icons-material/Send';
import StyledNewsletterForm from './styled/StyledNewsletterForm';

const NewsletterForm = () => {
  return (
    <StyledNewsletterForm>
      <input
        type='email'
        name='email'
        placeholder='Enter Your Email'
        onFocus={(e) => (e.target.closest('form').style.outline = '3px solid var(--mainOrange)')}
        onBlur={(e) => (e.target.closest('form').style.outline = 0)}
      />
      <SendIcon sx={{ color: 'var(--mainOrange)', fontSize: '4.5rem', paddingRight: '1.5rem', cursor: 'pointer' }} />
    </StyledNewsletterForm>
  );
};

export default NewsletterForm;
