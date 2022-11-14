import { Container, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReadMoreButton, ContactUsButton } from '../components/styled/Buttons';
import HeroSection from '../components/styled/HeroSection';
import SectionContent from '../components/styled/SectionContent';
import HeroTextualContent from '../components/styled/HeroTextualContent';
import { HeroImage } from '../components/styled/HeroImage';
import HeroImg from '../assets/Hero Image-min.svg';
import { useFetch } from '../hooks/useFetch';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from '../admin/contexts/DataContext';

const Hero = () => {
  const navigate = useNavigate();
  const { rootURL } = useContext(DataContext);
  const baseURL = `${rootURL}/api/general-setting`;
  const { data: generalData, isLoading, error } = useFetch(baseURL);

  const PlaceHolder = <Skeleton variant='text' height={80} sx={{ fontSize: '1rem' }} />;

  return (
    <HeroSection>
      <Container maxWidth='lg'>
        <SectionContent>
          <HeroTextualContent>
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 * 0 }}
            >
              {error && PlaceHolder}
              {isLoading && PlaceHolder}
              {generalData && generalData.data.attributes.WebsiteTitle}
            </motion.h1>
            <motion.p viewport={{ once: true }} initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 * 1 }}>
              A Digital Agency Of Inteligents & Creative People
            </motion.p>
            <motion.div
              className='HeroButtons'
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 * 2 }}
            >
              <ReadMoreButton onClick={() => navigate('/about')} variant='contained' size='large'>
                Read More
              </ReadMoreButton>
              <ContactUsButton onClick={() => navigate('/contact')} variant='contained' size='large'>
                Contact Us
              </ContactUsButton>
            </motion.div>
          </HeroTextualContent>
          <HeroImage
            as={motion.div}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <img src={HeroImg} alt='Hero' />
          </HeroImage>
        </SectionContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
