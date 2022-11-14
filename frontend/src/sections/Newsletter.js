import BlackContainer from '../components/BlackContainer';
import SectionTitle from '../components/styled/SectionTitle';
import SectionSubTitle from '../components/styled/SectionSubTitle';
import NewsletterForm from '../components/NewsletterForm';
import NewsletterContent from '../components/styled/NewsletterContent';
import NewsletterText from '../components/styled/NewsletterText';

const Newsletter = () => {
  return (
    <BlackContainer>
      <NewsletterContent>
        <SectionTitle sx={{ textAlign: 'center' }}>newsletter</SectionTitle>
        <SectionSubTitle
          sx={{ color: 'white', margin: '0 auto 2rem', width: '65%', maxWidth: '500px', '@media (min-width: 992px)': { width: '100%' } }}
        >
          Stay Always In Touch
        </SectionSubTitle>
        <NewsletterText>
          Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo
        </NewsletterText>
        <NewsletterForm />
      </NewsletterContent>
    </BlackContainer>
  );
};
export default Newsletter;
